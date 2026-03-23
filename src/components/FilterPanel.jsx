import { useGrimoire } from '../context/GrimoireContext';
import { archetypeThemes, ecologicalRoles, regions } from '../data/plants';
import { X, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function FilterPanel() {
  const { activeFilters, toggleFilter, clearFilters, searchQuery, setSearchQuery } = useGrimoire();
  const [open, setOpen] = useState(false);

  const hasFilters = activeFilters.tags.length > 0 || activeFilters.region || activeFilters.theme || searchQuery;

  return (
    <div className="mb-6">
      {/* Search + filter toggle */}
      <div className="flex gap-2 mb-3">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 opacity-35 w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm4.64-1.36l3.22 3.22-1.06 1.06-3.22-3.22A7 7 0 116.5 14a7 7 0 014.64-3.36z"/>
          </svg>
          <input
            type="search"
            placeholder="Search by name, family, theme…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-input pl-9"
          />
        </div>
        <button
          onClick={() => setOpen(v => !v)}
          className={`flex items-center gap-1.5 px-3 py-2 border rounded-sm text-xs font-sans font-medium transition-colors ${
            open || hasFilters
              ? 'bg-moss-700 text-parchment-50 border-moss-700'
              : 'border-ink-800/15 text-ink-700/60 hover:border-ink-800/30'
          }`}
        >
          <SlidersHorizontal size={13} />
          Filter
          {hasFilters && (
            <span className="ml-0.5 bg-white/30 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
              {activeFilters.tags.length + (activeFilters.region ? 1 : 0) + (activeFilters.theme ? 1 : 0)}
            </span>
          )}
        </button>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 px-2 py-2 text-xs text-ink-700/50 hover:text-ink-700 transition-colors"
          >
            <X size={13} />
            Clear
          </button>
        )}
      </div>

      {/* Active filter chips */}
      {(activeFilters.tags.length > 0 || activeFilters.region || activeFilters.theme) && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {activeFilters.tags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleFilter('tags', tag)}
              className="tag-pill bg-moss-700/10 border-moss-600/30 flex items-center gap-1 hover:bg-moss-700/20 transition-colors"
              style={{ color: '#4a6341' }}
            >
              {tag}
              <X size={9} />
            </button>
          ))}
          {activeFilters.region && (
            <button
              onClick={() => toggleFilter('region', activeFilters.region)}
              className="tag-pill bg-umber-500/10 border-umber-500/30 flex items-center gap-1"
              style={{ color: '#7d5c37' }}
            >
              {activeFilters.region}
              <X size={9} />
            </button>
          )}
          {activeFilters.theme && (
            <button
              onClick={() => toggleFilter('theme', activeFilters.theme)}
              className="tag-pill bg-crimson-500/10 border-crimson-500/30 flex items-center gap-1"
              style={{ color: '#9e3d3d' }}
            >
              {activeFilters.theme}
              <X size={9} />
            </button>
          )}
        </div>
      )}

      {/* Expanded filter panels */}
      {open && (
        <div className="border ink-border rounded-sm p-4 grid grid-cols-1 md:grid-cols-3 gap-5 bg-parchment-50 animate-fade-in-up">
          {/* Ecological roles */}
          <div>
            <div className="grimoire-section-title mb-3">Ecological Role</div>
            <div className="flex flex-wrap gap-1.5">
              {ecologicalRoles.map(role => (
                <button
                  key={role}
                  onClick={() => toggleFilter('tags', role)}
                  className={`tag-pill cursor-pointer transition-colors ${
                    activeFilters.tags.includes(role)
                      ? 'bg-moss-700 border-moss-700 text-parchment-50'
                      : 'hover:border-moss-600/40'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Region */}
          <div>
            <div className="grimoire-section-title mb-3">Region</div>
            <div className="flex flex-wrap gap-1.5">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => toggleFilter('region', region)}
                  className={`tag-pill cursor-pointer transition-colors ${
                    activeFilters.region === region
                      ? 'bg-umber-500 border-umber-500 text-parchment-50'
                      : 'hover:border-umber-400/40'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Archetypal themes */}
          <div>
            <div className="grimoire-section-title mb-3">Archetypal Theme</div>
            <div className="flex flex-wrap gap-1.5">
              {archetypeThemes.map(theme => (
                <button
                  key={theme}
                  onClick={() => toggleFilter('theme', theme)}
                  className={`tag-pill cursor-pointer transition-colors ${
                    activeFilters.theme === theme
                      ? 'bg-crimson-500 border-crimson-500 text-parchment-50'
                      : 'hover:border-crimson-400/40'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
