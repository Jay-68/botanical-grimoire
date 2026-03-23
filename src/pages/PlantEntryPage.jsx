import { useParams, Link, useNavigate } from 'react-router-dom';
import { plants } from '../data/plants';
import { useGrimoire } from '../context/GrimoireContext';
import { useState } from 'react';
import { ChevronLeft, ChevronDown, ChevronUp, FlaskConical, BookOpen, AlertTriangle, MapPin, Leaf, Microscope, FileText } from 'lucide-react';

const heroColorMap = {
  moss: { accent: '#4a6341', light: 'rgba(74,99,65,0.06)', border: 'rgba(74,99,65,0.2)' },
  umber: { accent: '#7d5c37', light: 'rgba(125,92,55,0.06)', border: 'rgba(125,92,55,0.2)' },
  crimson: { accent: '#9e3d3d', light: 'rgba(158,61,61,0.06)', border: 'rgba(158,61,61,0.2)' },
};

function CollapsibleSection({ title, icon: Icon, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border ink-border rounded-sm overflow-hidden mb-4">
      <button
        className="w-full flex items-center justify-between px-5 py-3 bg-parchment-50 hover:bg-parchment-100 transition-colors"
        onClick={() => setOpen(v => !v)}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={14} className="opacity-40" />}
          <span className="grimoire-section-title mb-0" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
            {title}
          </span>
        </div>
        {open ? <ChevronUp size={14} className="opacity-30" /> : <ChevronDown size={14} className="opacity-30" />}
      </button>
      {open && <div className="px-5 py-4">{children}</div>}
    </div>
  );
}

function ScientificEntry({ plant }) {
  const colors = heroColorMap[plant.heroColor] || heroColorMap.moss;

  return (
    <div className="space-y-0">
      {/* Taxonomy */}
      <CollapsibleSection title="Taxonomy" icon={Leaf}>
        <div className="divide-y divide-ink-800/5">
          {Object.entries({
            Kingdom: plant.taxonomy.kingdom,
            Division: plant.taxonomy.division,
            Class: plant.taxonomy.class,
            Order: plant.taxonomy.order,
            Family: plant.taxonomy.family,
            Genus: plant.taxonomy.genus,
            Species: <em>{plant.taxonomy.species}</em>,
            Authority: plant.taxonomy.authority,
          }).map(([key, val]) => (
            <div key={key} className="taxonomy-entry">
              <span className="text-xs font-sans font-medium text-ink-700/50 uppercase tracking-wider">{key}</span>
              <span className="text-sm font-sans text-ink-800">{val}</span>
            </div>
          ))}
        </div>
        {plant.taxonomy.synonyms.length > 0 && (
          <div className="mt-3 pt-3 border-t ink-border">
            <span className="text-xs font-sans font-medium text-ink-700/40 uppercase tracking-wider">Synonyms: </span>
            <span className="text-xs font-sans italic text-ink-700/60">{plant.taxonomy.synonyms.join(', ')}</span>
          </div>
        )}
      </CollapsibleSection>

      {/* Botanical Description */}
      <CollapsibleSection title="Botanical Description" icon={Microscope}>
        <div className="space-y-3">
          {Object.entries({
            Habit: plant.botanicalDescription.habit,
            Leaves: plant.botanicalDescription.leaves,
            Bark: plant.botanicalDescription.bark,
            Flowers: plant.botanicalDescription.flowers,
            Fruit: plant.botanicalDescription.fruit,
            Roots: plant.botanicalDescription.roots,
          }).map(([key, val]) => (
            <div key={key}>
              <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-0.5">{key}</div>
              <p className="text-sm font-sans text-ink-800 leading-relaxed">{val}</p>
            </div>
          ))}
          <div className="flex gap-6 pt-2 border-t ink-border">
            <div>
              <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider">Height</div>
              <div className="text-sm font-sans font-medium text-ink-800">{plant.botanicalDescription.height}</div>
            </div>
            <div>
              <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider">Spread</div>
              <div className="text-sm font-sans font-medium text-ink-800">{plant.botanicalDescription.spread}</div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Ecology */}
      <CollapsibleSection title="Ecology & Distribution" icon={MapPin}>
        <div className="space-y-3">
          {[
            ['Biome', plant.ecology.biome],
            ['Native Range', plant.ecology.nativeRange],
            ['Distribution', plant.ecology.distribution],
            ['Altitude Range', plant.ecology.altitudeRange],
            ['Soil', plant.ecology.soilPreference],
            ['Ecological Role', plant.ecology.ecologicalRole],
            ['Invasion Status', plant.ecology.invasionStatus],
          ].map(([key, val]) => (
            <div key={key}>
              <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-0.5">{key}</div>
              <p className="text-sm font-sans text-ink-800 leading-relaxed">{val}</p>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Chemical Profile */}
      <CollapsibleSection title="Chemical Profile" icon={FlaskConical}>
        {plant.chemicalProfile.primaryCompounds.length > 0 && (
          <div className="mb-4">
            <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-2">Primary Compounds</div>
            <div className="border ink-border rounded-sm overflow-hidden">
              <div className="grid text-[10px] font-sans font-medium text-ink-700/40 uppercase tracking-wider px-3 py-2 bg-parchment-100"
                style={{ gridTemplateColumns: '1fr 100px 1fr' }}>
                <span>Compound</span>
                <span>Type</span>
                <span>Notes</span>
              </div>
              {plant.chemicalProfile.primaryCompounds.map((c, i) => (
                <div key={i} className="chemical-compound-row px-3">
                  <span className="font-medium text-ink-800">{c.name}</span>
                  <span className="text-ink-700/55 italic">{c.type}</span>
                  <span className="text-ink-700/70">{c.notes}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="space-y-2">
          <div>
            <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-1 flex items-center gap-1">
              <AlertTriangle size={10} /> Toxicity
            </div>
            <p className="text-sm font-sans text-ink-800">{plant.chemicalProfile.toxicity}</p>
          </div>
          <div>
            <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-1">Medicinal Uses</div>
            <p className="text-sm font-sans text-ink-800">{plant.chemicalProfile.medicinalUses}</p>
          </div>
        </div>
      </CollapsibleSection>

      {/* Uses */}
      <CollapsibleSection title="Uses" icon={FileText}>
        <div className="space-y-3">
          {[
            ['Medicinal', plant.uses.medicinal],
            ['Ecological', plant.uses.ecological],
            ['Cultural', plant.uses.cultural],
            ['Timber', plant.uses.timber],
            ['Food', plant.uses.food],
          ].map(([key, val]) => (
            <div key={key}>
              <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-0.5">{key}</div>
              <p className="text-sm font-sans text-ink-800 leading-relaxed">{val}</p>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Symbolism — clearly marked */}
      <CollapsibleSection title="Symbolism & Interpretation" icon={BookOpen}>
        <div
          className="flex items-start gap-2 p-3 rounded-sm mb-4 text-xs font-sans"
          style={{ background: 'rgba(158,61,61,0.06)', border: '1px solid rgba(158,61,61,0.2)', color: '#7a2d2d' }}
        >
          <AlertTriangle size={12} className="shrink-0 mt-0.5" />
          <span>{plant.symbolism.disclaimer}</span>
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-1">Archetypes</div>
            <p className="text-sm font-serif italic text-ink-800">{plant.symbolism.archetypes}</p>
          </div>
          <div>
            <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-1">Cultural Meaning</div>
            <p className="text-sm font-sans text-ink-800 leading-relaxed">{plant.symbolism.culturalMeaning}</p>
          </div>
          <div>
            <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-1">Themes</div>
            <div className="flex flex-wrap gap-1.5">
              {plant.symbolism.themes.map(t => (
                <span key={t} className="tag-pill" style={{ borderColor: 'rgba(158,61,61,0.25)', color: '#7a2d2d' }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-1">Philosophical Note</div>
            <p className="text-sm font-sans italic text-ink-700/75 leading-relaxed">{plant.symbolism.philosophicalNote}</p>
          </div>
          <div>
            <div className="text-[10px] font-sans font-medium text-ink-700/45 uppercase tracking-wider mb-1">Cross-Cultural Links</div>
            <p className="text-sm font-sans text-ink-800 leading-relaxed">{plant.symbolism.crossCulturalLinks}</p>
          </div>
        </div>
      </CollapsibleSection>

      {/* Grimoire Classification */}
      <CollapsibleSection title="Grimoire Classification" icon={BookOpen} defaultOpen={false}>
        <div
          className="p-4 rounded-sm space-y-3"
          style={{ background: colors.light, border: `1px solid ${colors.border}` }}
        >
          <div
            className="flex items-center gap-2 pb-3 mb-1"
            style={{ borderBottom: `1px solid ${colors.border}` }}
          >
            <span className="ornament text-xl">✦</span>
            <span className="font-display text-base" style={{ color: colors.accent }}>
              {plant.grimoireClassification.archetypeSignature}
            </span>
          </div>
          {[
            ['Ontological Status', plant.grimoireClassification.ontologicalStatus],
            ['Primary Theme', plant.grimoireClassification.primaryTheme],
            ['Secondary Themes', plant.grimoireClassification.secondaryThemes.join(' · ')],
            ['Element', plant.grimoireClassification.element],
            ['Season', plant.grimoireClassification.season],
          ].map(([k, v]) => (
            <div key={k} className="taxonomy-entry" style={{ borderColor: `${colors.border}` }}>
              <span className="text-xs font-sans font-medium uppercase tracking-wider" style={{ color: `${colors.accent}`, opacity: 0.7 }}>{k}</span>
              <span className="text-sm font-sans text-ink-800">{v}</span>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* Reflection */}
      <div
        className="p-5 rounded-sm"
        style={{ background: colors.light, border: `1px solid ${colors.border}` }}
      >
        <div className="grimoire-section-title mb-3">Reflection</div>
        <p className="font-serif italic text-ink-800 text-base leading-relaxed">
          "{plant.reflection}"
        </p>
      </div>

      {/* Field Notes */}
      {plant.fieldNotes && plant.fieldNotes.length > 0 && (
        <CollapsibleSection title="Field Notes" icon={FileText} defaultOpen={false}>
          <div className="space-y-4">
            {plant.fieldNotes.map((note, i) => (
              <div key={i} className="field-note-card">
                <div className="flex items-center gap-3 mb-2 text-xs font-sans text-ink-700/50">
                  <span className="flex items-center gap-1"><MapPin size={10} />{note.location}</span>
                  <span>·</span>
                  <span>{note.date}</span>
                  <span>·</span>
                  <span>{note.observer}</span>
                </div>
                <p className="text-sm font-sans text-ink-800 leading-relaxed">{note.note}</p>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}
    </div>
  );
}

function GrimoireEntry({ plant }) {
  const colors = heroColorMap[plant.heroColor] || heroColorMap.moss;

  return (
    <div className="font-serif">
      {/* Grimoire classification block */}
      <div
        className="p-6 mb-6 rounded-sm relative"
        style={{ background: colors.light, border: `1px solid ${colors.border}` }}
      >
        <div className="absolute top-3 right-4 text-4xl hero-ornament" style={{ opacity: 0.08 }}>✦</div>
        <div className="text-[9px] tracking-[0.2em] uppercase font-sans mb-2" style={{ color: colors.accent, opacity: 0.7 }}>
          Grimoire Classification
        </div>
        <div className="font-display text-xl mb-3" style={{ color: colors.accent }}>
          {plant.grimoireClassification.archetypeSignature}
        </div>
        <p className="font-serif italic text-ink-700 text-sm mb-3 leading-relaxed">
          {plant.grimoireClassification.ontologicalStatus}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[plant.grimoireClassification.primaryTheme, ...plant.grimoireClassification.secondaryThemes].map(t => (
            <span key={t} className="tag-pill" style={{ borderColor: colors.border, color: colors.accent }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Symbolism section */}
      <div className="mb-6">
        <div
          className="flex items-start gap-2 p-3 mb-4 text-xs font-sans"
          style={{ background: 'rgba(158,61,61,0.06)', border: '1px solid rgba(158,61,61,0.2)', color: '#7a2d2d', borderRadius: '1px' }}
        >
          <AlertTriangle size={12} className="shrink-0 mt-0.5" />
          <span>{plant.symbolism.disclaimer}</span>
        </div>

        <div className="grimoire-section-title">Archetypes & Cultural Meaning</div>
        <p className="font-serif italic text-ink-800 text-base mb-4 leading-relaxed">{plant.symbolism.archetypes}</p>
        <p className="font-serif text-ink-800 text-sm leading-relaxed mb-4">{plant.symbolism.culturalMeaning}</p>

        <div className="grimoire-pullquote">{plant.symbolism.philosophicalNote}</div>

        <div className="grimoire-section-title mt-5">Cross-Cultural Links</div>
        <p className="font-serif text-ink-800 text-sm leading-relaxed">{plant.symbolism.crossCulturalLinks}</p>
      </div>

      <hr className="section-divider my-6" />

      {/* Themes */}
      <div className="mb-6">
        <div className="grimoire-section-title">Thematic Keys</div>
        <div className="flex flex-wrap gap-2">
          {plant.symbolism.themes.map(t => (
            <span key={t} className="tag-pill text-sm py-1 px-3 font-serif italic" style={{ borderColor: colors.border, color: colors.accent }}>{t}</span>
          ))}
        </div>
      </div>

      <hr className="section-divider my-6" />

      {/* Reflection */}
      <div className="mb-6">
        <div className="grimoire-section-title">Reflection</div>
        <p className="font-serif italic text-ink-800 text-lg leading-relaxed grimoire-drop-cap">
          {plant.reflection}
        </p>
      </div>

      <hr className="section-divider my-6" />

      {/* Scientific data — compact in grimoire mode */}
      <details className="mb-4">
        <summary className="grimoire-section-title cursor-pointer select-none mb-2 hover:opacity-70 transition-opacity">
          Scientific Data (Taxonomy, Morphology, Chemistry)
        </summary>
        <div className="mt-4 space-y-4 font-sans text-sm">
          {/* Taxonomy */}
          <div>
            <div className="grimoire-section-title text-[9px]">Taxonomy</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {Object.entries({
                Family: plant.taxonomy.family,
                Genus: plant.taxonomy.genus,
                Species: plant.taxonomy.species,
                Authority: plant.taxonomy.authority,
              }).map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <span className="text-ink-700/40 uppercase text-[10px] tracking-wider font-medium w-20 shrink-0">{k}</span>
                  <span className="text-ink-800 italic">{v}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Ecology */}
          <div>
            <div className="grimoire-section-title text-[9px]">Ecology</div>
            <p className="text-ink-700/70">{plant.ecology.ecologicalRole}</p>
            <p className="text-ink-700/50 text-xs mt-1">Distribution: {plant.ecology.distribution}</p>
          </div>
          {/* Chemical */}
          <div>
            <div className="grimoire-section-title text-[9px]">Chemical Profile</div>
            <p className="text-ink-700/70">{plant.chemicalProfile.toxicity}</p>
          </div>
        </div>
      </details>

      {/* Field Notes */}
      {plant.fieldNotes && plant.fieldNotes.length > 0 && (
        <>
          <hr className="section-divider my-6" />
          <div>
            <div className="grimoire-section-title">Field Observations</div>
            {plant.fieldNotes.map((note, i) => (
              <div key={i} className="field-note-card mb-3">
                <div className="font-display text-xs mb-1" style={{ color: colors.accent, opacity: 0.7 }}>
                  {note.location} · {note.date}
                </div>
                <p className="font-serif text-sm text-ink-800 leading-relaxed italic">{note.note}</p>
                <div className="text-xs font-sans text-ink-700/35 mt-1">— {note.observer}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function PlantEntryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { readingMode } = useGrimoire();
  const plant = plants.find(p => p.slug === slug);
  const colors = plant ? (heroColorMap[plant.heroColor] || heroColorMap.moss) : heroColorMap.moss;

  if (!plant) {
    return (
      <div className="min-h-screen parchment-bg flex items-center justify-center">
        <div className="text-center">
          <div className="font-serif italic text-ink-700/40 text-lg mb-4">Entry not found in the record.</div>
          <Link to="/" className="text-sm font-sans text-moss-600 hover:text-moss-700">← Return to catalogue</Link>
        </div>
      </div>
    );
  }

  const currentIndex = plants.findIndex(p => p.slug === slug);
  const prevPlant = currentIndex > 0 ? plants[currentIndex - 1] : null;
  const nextPlant = currentIndex < plants.length - 1 ? plants[currentIndex + 1] : null;

  return (
    <div className="min-h-screen parchment-bg">
      {/* Entry header */}
      <div
        className="border-b ink-border"
        style={{ background: `linear-gradient(to bottom, ${colors.light}, transparent)` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-sans text-ink-700/40 hover:text-ink-700 transition-colors mb-6"
          >
            <ChevronLeft size={13} />
            Catalogue
          </Link>

          <div className="max-w-3xl">
            {/* Family / classification header */}
            <div className="flex items-center gap-3 mb-2">
              <div
                className="text-[9px] tracking-[0.15em] uppercase font-sans font-medium px-2 py-1 rounded-sm"
                style={{ background: colors.light, color: colors.accent, border: `1px solid ${colors.border}` }}
              >
                {plant.taxonomy.family}
              </div>
              {readingMode === 'grimoire' && (
                <div className="text-[9px] tracking-[0.15em] uppercase font-sans" style={{ color: colors.accent, opacity: 0.6 }}>
                  {plant.grimoireClassification.primaryTheme}
                </div>
              )}
            </div>

            {/* Name */}
            <h1 className={`mb-1 leading-tight ${readingMode === 'grimoire' ? 'font-display text-3xl md:text-4xl text-ink-900' : 'font-sans font-bold text-2xl md:text-3xl text-ink-900'}`}>
              {readingMode === 'grimoire' ? (
                <>
                  <em className="font-display not-italic">{plant.taxonomy.genus}</em>{' '}
                  <em className="font-display not-italic font-light">{plant.taxonomy.species.split(' ')[1]}</em>
                </>
              ) : plant.commonName}
            </h1>

            <div className={`mb-4 ${readingMode === 'grimoire' ? 'font-serif text-lg italic text-ink-700/60' : 'font-sans text-base text-ink-700/55'}`}>
              {readingMode === 'grimoire' ? plant.commonName : <em>{plant.taxonomy.species} — {plant.taxonomy.authority}</em>}
            </div>

            {/* Local names */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[10px] font-sans text-ink-700/35 uppercase tracking-wider">Also known as:</span>
              {plant.localNames.map(n => (
                <span key={n} className="text-xs font-sans text-ink-700/55 italic">{n}</span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {plant.tags.map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-8">
          <main className="flex-1 min-w-0 max-w-3xl">
            {readingMode === 'scientific'
              ? <ScientificEntry plant={plant} />
              : <GrimoireEntry plant={plant} />
            }

            {/* Entry navigation */}
            <div className="flex items-center justify-between mt-8 pt-5 border-t ink-border">
              {prevPlant ? (
                <Link
                  to={`/plant/${prevPlant.slug}`}
                  className="flex items-center gap-2 text-sm font-sans text-ink-700/50 hover:text-ink-800 transition-colors"
                >
                  <ChevronLeft size={14} />
                  <span>
                    <div className="text-[10px] uppercase tracking-wider mb-0.5 opacity-60">Previous</div>
                    {prevPlant.commonName}
                  </span>
                </Link>
              ) : <div />}

              {nextPlant ? (
                <Link
                  to={`/plant/${nextPlant.slug}`}
                  className="flex items-center gap-2 text-sm font-sans text-ink-700/50 hover:text-ink-800 transition-colors text-right"
                >
                  <span>
                    <div className="text-[10px] uppercase tracking-wider mb-0.5 opacity-60">Next</div>
                    {nextPlant.commonName}
                  </span>
                  <ChevronLeft size={14} className="rotate-180" />
                </Link>
              ) : <div />}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24 space-y-4">
              {/* Quick info */}
              <div
                className="p-4 rounded-sm"
                style={{ background: colors.light, border: `1px solid ${colors.border}` }}
              >
                <div className="grimoire-section-title mb-3">Quick Reference</div>
                <div className="space-y-2 text-xs font-sans">
                  <div>
                    <div className="text-ink-700/40 uppercase tracking-wider text-[9px]">Family</div>
                    <div className="font-medium text-ink-800">{plant.taxonomy.family}</div>
                  </div>
                  <div>
                    <div className="text-ink-700/40 uppercase tracking-wider text-[9px]">Native Range</div>
                    <div className="font-medium text-ink-800">{plant.ecology.nativeRange}</div>
                  </div>
                  <div>
                    <div className="text-ink-700/40 uppercase tracking-wider text-[9px]">Height</div>
                    <div className="font-medium text-ink-800">{plant.botanicalDescription.height}</div>
                  </div>
                  <div>
                    <div className="text-ink-700/40 uppercase tracking-wider text-[9px]">Altitude</div>
                    <div className="font-medium text-ink-800">{plant.ecology.altitudeRange}</div>
                  </div>
                  <div>
                    <div className="text-ink-700/40 uppercase tracking-wider text-[9px]">Invasion Status</div>
                    <div className="font-medium text-ink-800">{plant.ecology.invasionStatus.split('—')[0].trim()}</div>
                  </div>
                </div>
              </div>

              {/* Grimoire signature */}
              {readingMode === 'grimoire' && (
                <div
                  className="p-4 rounded-sm"
                  style={{ border: `1px solid ${colors.border}` }}
                >
                  <div className="grimoire-section-title mb-2">Archetype</div>
                  <div className="font-display text-sm leading-tight mb-2" style={{ color: colors.accent }}>
                    {plant.grimoireClassification.archetypeSignature}
                  </div>
                  <div className="font-serif text-xs italic text-ink-700/60 leading-relaxed">
                    {plant.grimoireClassification.primaryTheme}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {plant.grimoireClassification.secondaryThemes.slice(0, 2).map(t => (
                      <span key={t} className="tag-pill text-[9px]" style={{ borderColor: colors.border, color: colors.accent }}>{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
