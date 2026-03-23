import { Link, useLocation } from 'react-router-dom';
import { useGrimoire } from '../context/GrimoireContext';
import { BookOpen, FlaskConical, Search, TreePine } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { readingMode, toggleReadingMode } = useGrimoire();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className="sticky top-0 z-50 border-b ink-border"
      style={{ background: 'rgba(253, 250, 244, 0.96)', backdropFilter: 'blur(8px)' }}
    >
      {/* Top bar — site identity */}
      <div className="border-b ink-border py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                {/* Botanical grimoire emblem — stylised plant cross-section */}
                <circle cx="16" cy="16" r="14" stroke="#3d2e1a" strokeWidth="1" opacity="0.3"/>
                <path d="M16 4 C16 4 10 10 10 16 C10 22 16 28 16 28" stroke="#4a6341" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M16 4 C16 4 22 10 22 16 C22 22 16 28 16 28" stroke="#4a6341" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M4 16 C4 16 10 12 16 12 C22 12 28 16 28 16" stroke="#3d2e1a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5"/>
                <circle cx="16" cy="16" r="2" fill="#4a6341"/>
                {/* Radiating lines */}
                <path d="M16 10 L13 7" stroke="#4a6341" strokeWidth="0.8" opacity="0.6"/>
                <path d="M16 10 L19 7" stroke="#4a6341" strokeWidth="0.8" opacity="0.6"/>
              </svg>
            </div>
            <div>
              <div className="font-display text-base font-semibold tracking-wide text-ink-800 leading-none">
                Botanical Grimoire
              </div>
              <div className="text-[10px] tracking-[0.12em] uppercase text-ink-800 opacity-45 font-sans mt-0.5">
                A Living Manuscript of Real Plants
              </div>
            </div>
          </Link>

          {/* Reading mode toggle */}
          <div className="mode-toggle-pill hidden sm:flex">
            <button
              className={readingMode === 'scientific' ? 'active' : ''}
              onClick={() => readingMode !== 'scientific' && toggleReadingMode()}
              title="Scientific view — clean, academic layout"
            >
              <span className="flex items-center gap-1.5">
                <FlaskConical size={11} />
                Scientific
              </span>
            </button>
            <button
              className={readingMode === 'grimoire' ? 'active' : ''}
              onClick={() => readingMode !== 'grimoire' && toggleReadingMode()}
              title="Grimoire view — manuscript-inspired typography"
            >
              <span className="flex items-center gap-1.5">
                <BookOpen size={11} />
                Grimoire
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 rounded text-ink-700 opacity-60"
            onClick={() => setMobileMenuOpen(v => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <rect y="2" width="18" height="1.5" rx="1"/>
              <rect y="8.25" width="18" height="1.5" rx="1"/>
              <rect y="14.5" width="18" height="1.5" rx="1"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-6 h-10">
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Catalogue
            </Link>
            <Link
              to="/taxonomy"
              className={`nav-link ${isActive('/taxonomy') ? 'active' : ''}`}
            >
              <span className="hidden sm:inline">Taxonomy</span>
              <span className="sm:hidden">
                <TreePine size={14} />
              </span>
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </nav>

          <div className="ml-auto hidden md:block w-56">
            <SearchBar compact />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t ink-border px-4 py-3 flex flex-col gap-3">
          <div className="mode-toggle-pill flex w-fit">
            <button
              className={readingMode === 'scientific' ? 'active' : ''}
              onClick={() => { readingMode !== 'scientific' && toggleReadingMode(); setMobileMenuOpen(false); }}
            >
              <FlaskConical size={11} className="inline mr-1" />Scientific
            </button>
            <button
              className={readingMode === 'grimoire' ? 'active' : ''}
              onClick={() => { readingMode !== 'grimoire' && toggleReadingMode(); setMobileMenuOpen(false); }}
            >
              <BookOpen size={11} className="inline mr-1" />Grimoire
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function SearchBar({ compact }) {
  const { searchQuery, setSearchQuery } = useGrimoire();
  return (
    <div className="relative">
      <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-700 opacity-40" />
      <input
        type="search"
        placeholder="Search species, themes…"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="search-input pl-8"
        style={{ padding: compact ? '5px 10px 5px 28px' : undefined }}
      />
    </div>
  );
}
