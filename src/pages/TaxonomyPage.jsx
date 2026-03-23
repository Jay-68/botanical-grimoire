import TaxonomyTree from '../components/TaxonomyTree';
import { plants } from '../data/plants';
import { Link } from 'react-router-dom';
import { useGrimoire } from '../context/GrimoireContext';

export default function TaxonomyPage() {
  const { readingMode } = useGrimoire();

  // Build order/family groupings
  const grouped = {};
  plants.forEach(p => {
    const order = p.taxonomy.order;
    if (!grouped[order]) grouped[order] = { family: {}, order };
    if (!grouped[order].family[p.taxonomy.family]) grouped[order].family[p.taxonomy.family] = [];
    grouped[order].family[p.taxonomy.family].push(p);
  });

  return (
    <div className="min-h-screen parchment-bg">
      <div className="border-b ink-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="text-[10px] tracking-[0.15em] uppercase font-sans font-medium text-ink-700/40 mb-2">
            Classification System
          </div>
          <h1 className={`mb-3 ${readingMode === 'grimoire' ? 'font-display text-3xl text-ink-900' : 'font-sans font-bold text-2xl text-ink-900'}`}>
            Taxonomic Index
          </h1>
          <p className="font-sans text-sm text-ink-700/55 max-w-2xl leading-relaxed">
            The following hierarchy reflects current angiosperm phylogeny. Each species is listed within
            its order and family, with cross-links to full entries. Relationships are based on morphology
            and molecular data.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-8">
          {/* Interactive tree */}
          <aside className="hidden md:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="grimoire-section-title mb-4">Tree View</div>
              <TaxonomyTree compact />
            </div>
          </aside>

          {/* Main content — table view */}
          <main className="flex-1 min-w-0">
            <div className="grimoire-section-title mb-4">Entries by Order</div>

            <div className="space-y-6">
              {Object.entries(grouped).map(([order, data]) => (
                <div key={order} className="scientific-card overflow-hidden">
                  {/* Order header */}
                  <div
                    className="px-5 py-3 border-b ink-border"
                    style={{ background: 'rgba(45,32,16,0.03)' }}
                  >
                    <div className="text-[9px] tracking-[0.15em] uppercase font-sans text-ink-700/40 mb-0.5">Order</div>
                    <div className="font-sans font-semibold text-ink-900">{order}</div>
                  </div>

                  {Object.entries(data.family).map(([family, familyPlants]) => (
                    <div key={family}>
                      <div
                        className="px-5 py-2 border-b ink-border"
                        style={{ background: 'rgba(45,32,16,0.01)' }}
                      >
                        <div className="text-[9px] tracking-[0.13em] uppercase font-sans text-ink-700/35">Family</div>
                        <div className="font-sans text-sm font-medium text-ink-800">{family}</div>
                      </div>
                      {familyPlants.map(plant => (
                        <Link
                          key={plant.id}
                          to={`/plant/${plant.slug}`}
                          className="flex items-center gap-4 px-5 py-4 border-b ink-border last:border-b-0 hover:bg-parchment-100 transition-colors group"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <span className="font-serif italic text-ink-900 text-sm group-hover:text-moss-700 transition-colors">
                                {plant.taxonomy.species}
                              </span>
                              <span className="text-[10px] font-sans text-ink-700/35">{plant.taxonomy.authority}</span>
                            </div>
                            <div className="text-xs font-sans text-ink-700/50 mt-0.5">{plant.commonName}</div>
                          </div>

                          <div className="hidden sm:flex flex-wrap gap-1">
                            {plant.tags.slice(0, 2).map(t => (
                              <span key={t} className="tag-pill">{t}</span>
                            ))}
                          </div>

                          {readingMode === 'grimoire' && (
                            <div className="hidden md:block text-xs font-serif italic text-ink-700/40 max-w-32 text-right">
                              {plant.grimoireClassification.primaryTheme}
                            </div>
                          )}

                          <div className="text-ink-700/25 group-hover:text-moss-600 transition-colors text-sm">→</div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Classification note */}
            <div
              className="mt-8 p-4 text-xs font-sans text-ink-700/50 leading-relaxed"
              style={{ border: '1px solid rgba(45,32,16,0.1)', borderRadius: '1px' }}
            >
              <strong className="text-ink-700/60">Classification note:</strong> This database follows APG IV (Angiosperm Phylogeny Group IV, 2016) classification for flowering plants.
              Synonyms are documented per species entry. Species authority citations follow international botanical nomenclature standards.
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
