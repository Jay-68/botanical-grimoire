import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GrimoireProvider, useGrimoire } from './context/GrimoireContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PlantEntryPage from './pages/PlantEntryPage';
import TaxonomyPage from './pages/TaxonomyPage';
import AboutPage from './pages/AboutPage';

function AppShell() {
  const { readingMode } = useGrimoire();

  return (
    <div className={readingMode === 'grimoire' ? 'grimoire-mode' : ''}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plant/:slug" element={<PlantEntryPage />} />
        <Route path="/taxonomy" element={<TaxonomyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* Footer */}
      <footer className="border-t ink-border mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-display text-sm text-ink-900 mb-1">Botanical Grimoire</div>
              <div className="text-xs font-sans text-ink-700/40">
                Real plants. Rigorous science. Careful interpretation.
              </div>
            </div>
            <div className="text-xs font-sans text-ink-700/30 flex items-center gap-3">
              <span className="ornament">✦</span>
              <span>No fantasy species. Only real plants, interpreted deeply.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GrimoireProvider>
        <AppShell />
      </GrimoireProvider>
    </BrowserRouter>
  );
}
