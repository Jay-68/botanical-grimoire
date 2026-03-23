import { createContext, useContext, useState } from 'react';

const GrimoireContext = createContext();

export function GrimoireProvider({ children }) {
  const [readingMode, setReadingMode] = useState('scientific'); // 'scientific' | 'grimoire'
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    tags: [],
    region: '',
    theme: '',
  });

  const toggleReadingMode = () => {
    setReadingMode(prev => prev === 'scientific' ? 'grimoire' : 'scientific');
  };

  const toggleFilter = (type, value) => {
    if (type === 'tags') {
      setActiveFilters(prev => ({
        ...prev,
        tags: prev.tags.includes(value)
          ? prev.tags.filter(t => t !== value)
          : [...prev.tags, value]
      }));
    } else {
      setActiveFilters(prev => ({
        ...prev,
        [type]: prev[type] === value ? '' : value
      }));
    }
  };

  const clearFilters = () => {
    setActiveFilters({ tags: [], region: '', theme: '' });
    setSearchQuery('');
  };

  return (
    <GrimoireContext.Provider value={{
      readingMode,
      toggleReadingMode,
      searchQuery,
      setSearchQuery,
      activeFilters,
      toggleFilter,
      clearFilters,
    }}>
      {children}
    </GrimoireContext.Provider>
  );
}

export const useGrimoire = () => useContext(GrimoireContext);
