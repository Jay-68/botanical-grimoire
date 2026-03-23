import { useGrimoire } from '../context/GrimoireContext';
import { Link } from 'react-router-dom';
import { FlaskConical, BookOpen, Leaf, Map } from 'lucide-react';

export default function AboutPage() {
  const { readingMode } = useGrimoire();
  return (
    <div className="min-h-screen parchment-bg">
      <div className="border-b ink-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="text-[10px] tracking-[0.15em] uppercase font-sans font-medium text-ink-700/40 mb-2">About this project</div>
          <h1 className={`mb-3 ${readingMode === 'grimoire' ? 'font-display text-3xl text-ink-900' : 'font-sans font-bold text-2xl text-ink-900'}`}>
            On the Nature of This Record
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <div className="space-y-8">

          {/* What this is */}
          <section>
            <div className="grimoire-section-title mb-4">What this is</div>
            <p className="font-serif text-ink-800 text-base leading-relaxed mb-4">
              The Botanical Grimoire is a structured reference for real plant species that integrates two modes of understanding
              which most databases keep strictly separate: <strong>scientific documentation</strong> and <strong>symbolic interpretation</strong>.
            </p>
            <p className="font-serif text-ink-800 text-base leading-relaxed mb-4">
              Every entry contains both. They are not merged. The boundary between what is observed, what is measured,
              and what is interpreted is maintained throughout — and made visible.
            </p>
            <p className="font-serif text-ink-800 text-base leading-relaxed">
              This is not a mysticism database. It is also not a dry taxonomic index. It is the space between those,
              built carefully enough that neither collapses into the other.
            </p>
          </section>

          <hr className="section-divider" />

          {/* Two modes */}
          <section>
            <div className="grimoire-section-title mb-4">Two Reading Modes</div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="scientific-card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical size={15} className="text-ink-700/40" />
                  <span className="font-sans font-semibold text-sm text-ink-900">Scientific Mode</span>
                </div>
                <p className="font-sans text-sm text-ink-700/65 leading-relaxed">
                  Clean layout. Taxonomy, morphology, ecology, chemistry. Collapsible data sections.
                  Academic in tone, evidence-based. The symbolic sections are present but clearly marked.
                </p>
              </div>
              <div className="grimoire-card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={15} className="text-ink-700/40" />
                  <span className="font-display text-sm text-ink-900">Grimoire Mode</span>
                </div>
                <p className="font-serif text-sm italic text-ink-700/65 leading-relaxed">
                  Manuscript-inspired typography. The symbolic and mythographic dimensions lead. Scientific
                  data is present but folded beneath. The tone shifts; the content does not change.
                </p>
              </div>
            </div>
          </section>

          <hr className="section-divider" />

          {/* Epistemological commitment */}
          <section>
            <div className="grimoire-section-title mb-4">Epistemological Commitment</div>
            <div className="grimoire-pullquote">
              "It distinguishes clearly between what is known, what is observed, and what is interpreted—while presenting all three in one coherent system."
            </div>
            <p className="font-serif text-ink-800 text-base leading-relaxed mb-4 mt-4">
              All symbolic, mythographic, and cultural content is explicitly marked as interpretation. We do not present
              folk belief as established fact, nor do we dismiss it as irrelevant. Cultural meaning is real data about
              human relationships with plants — it simply inhabits a different epistemic category than metabolite assays.
            </p>
            <p className="font-serif text-ink-800 text-base leading-relaxed">
              The <em>Disclaimer</em> appearing at the top of every Symbolism section is not performative hedging.
              It is part of the architecture.
            </p>
          </section>

          <hr className="section-divider" />

          {/* Current scope */}
          <section>
            <div className="grimoire-section-title mb-4">Current Scope</div>
            <p className="font-sans text-sm text-ink-700/65 leading-relaxed mb-4">
              The current catalogue contains four entries, with a focus on East African flora — particularly species found in
              Kenya, Tanzania, and adjacent Afromontane zones. Priority was given to species that have both significant
              ecological standing and rich cultural-symbolic histories.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {[
                { name: 'Ficus thonningii', role: 'Keystone · Sacred' },
                { name: 'Duranta erecta', role: 'Ornamental · Invasive' },
                { name: 'Euphorbia milii', role: 'Succulent · Myth-bearer' },
                { name: 'Rumex usambarensis', role: 'Pioneer · Edible' },
              ].map(p => (
                <Link
                  key={p.name}
                  to={`/plant/${p.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="scientific-card p-3 hover:border-moss-600/30 transition-colors"
                >
                  <div className="font-serif italic text-xs text-ink-800 mb-1">{p.name}</div>
                  <div className="text-[10px] font-sans text-ink-700/40">{p.role}</div>
                </Link>
              ))}
            </div>
          </section>

          <hr className="section-divider" />

          {/* Future */}
          <section>
            <div className="grimoire-section-title mb-4">Future Directions</div>
            <ul className="space-y-2 font-sans text-sm text-ink-700/65">
              {[
                'Distribution map view with field observation pins',
                'Cross-links between species by shared pollinators, chemistry, or themes',
                '"Myth vs Biology" comparison panels per entry',
                'PDF export as printable grimoire pages',
                'Expanded East African endemic species catalogue',
                'User-contributed field notes with moderation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-ink-700/25 mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
