import { useMemo } from 'react';
import { plants } from '../data/plants';
import { useGrimoire } from '../context/GrimoireContext';
import PlantCard from '../components/PlantCard';
import FilterPanel from '../components/FilterPanel';
import TaxonomyTree from '../components/TaxonomyTree';
import { BookOpen } from 'lucide-react';

export default function HomePage() {
  const { readingMode, searchQuery, activeFilters } = useGrimoire();

  const filteredPlants = useMemo(() => {
    let result = plants;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.commonName.toLowerCase().includes(q) ||
        p.taxonomy.genus.toLowerCase().includes(q) ||
        p.taxonomy.family.toLowerCase().includes(q) ||
        p.taxonomy.species.toLowerCase().includes(q) ||
        p.localNames.some(n => n.toLowerCase().includes(q)) ||
        p.grimoireClassification.primaryTheme.toLowerCase().includes(q) ||
        p.grimoireClassification.archetypeSignature.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (activeFilters.tags.length > 0) {
      result = result.filter(p =>
        activeFilters.tags.some(tag => p.tags.includes(tag))
      );
    }

    if (activeFilters.region) {
      result = result.filter(p =>
        p.ecology.distribution.toLowerCase().includes(activeFilters.region.toLowerCase()) ||
        p.ecology.nativeRange.toLowerCase().includes(activeFilters.region.toLowerCase())
      );
    }

    if (activeFilters.theme) {
      result = result.filter(p =>
        p.grimoireClassification.primaryTheme.toLowerCase().includes(activeFilters.theme.toLowerCase()) ||
        p.grimoireClassification.secondaryThemes.some(t =>
          t.toLowerCase().includes(activeFilters.theme.toLowerCase())
        )
      );
    }

    return result;
  }, [searchQuery, activeFilters]);

  return (
    <div className="min-h-screen parchment-bg">
      {/* Hero */}
      <div className="border-b ink-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <div className="max-w-2xl">
            {readingMode === 'grimoire' ? (
              <>
                <div className="text-[10px] tracking-[0.2em] uppercase font-sans text-ink-700/40 mb-3">
                  Codex Prima · Entry Index
                </div>
                <h1 className="font-display text-3xl md:text-4xl text-ink-900 mb-3 leading-tight">
                  The Living Catalogue
                </h1>
                <p className="font-serif italic text-ink-700 text-base md:text-lg leading-relaxed opacity-75">
                  Each entry records what is known, what is observed, and what is interpreted.
                  These categories are not equal — but each has a place in the record.
                </p>
              </>
            ) : (
              <>
                <div className="text-[10px] tracking-[0.15em] uppercase font-sans font-medium text-ink-700/40 mb-3">
                  Species Catalogue
                </div>
                <h1 className="font-sans font-semibold text-2xl md:text-3xl text-ink-900 mb-3 leading-tight">
                  Botanical Records
                </h1>
                <p className="font-sans text-ink-700/65 text-sm md:text-base leading-relaxed">
                  Structured entries documenting taxonomy, ecology, chemistry, and cultural significance
                  of real plant species with emphasis on East African flora.
                </p>
              </>
            )}

            {/* Stats row */}
            <div className="flex items-center gap-6 mt-5 pt-5 border-t ink-border">
              <div>
                <div className="font-sans text-xs text-ink-700/40 uppercase tracking-wider">Entries</div>
                <div className="font-sans font-semibold text-ink-900 text-xl">{plants.length}</div>
              </div>
              <div>
                <div className="font-sans text-xs text-ink-700/40 uppercase tracking-wider">Families</div>
                <div className="font-sans font-semibold text-ink-900 text-xl">
                  {new Set(plants.map(p => p.taxonomy.family)).size}
                </div>
              </div>
              <div>
                <div className="font-sans text-xs text-ink-700/40 uppercase tracking-wider">Regions</div>
                <div className="font-sans font-semibold text-ink-900 text-xl">4</div>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-2 text-xs text-ink-700/40 font-sans">
                <BookOpen size={12} />
                Scientific + Symbolic documentation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-8">
          {/* Left: plant grid */}
          <main className="flex-1 min-w-0">
            <FilterPanel />

            {filteredPlants.length === 0 ? (
              <div className="text-center py-16 text-ink-700/40">
                <div className="text-4xl mb-3 hero-ornament" style={{ opacity: 0.2 }}>✦</div>
                <p className="font-serif italic text-base">No entries match the current filters.</p>
                <p className="font-sans text-sm mt-1 opacity-60">Try clearing your search or adjusting filters.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-sans text-ink-700/40 uppercase tracking-wider">
                    {filteredPlants.length === plants.length
                      ? `${plants.length} entries`
                      : `${filteredPlants.length} of ${plants.length} entries`}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredPlants.map((plant, i) => (
                    <PlantCard key={plant.id} plant={plant} index={i} />
                  ))}
                </div>
              </>
            )}
          </main>

          {/* Right sidebar: taxonomy tree */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="grimoire-section-title">Taxonomy Browser</div>
              <TaxonomyTree compact />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
