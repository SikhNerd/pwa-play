import { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { useDbStore } from '../lib/db';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const search = useDbStore(state => state.search);
  const loading = useDbStore(state => state.loading);
  
  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    await search(query.toLowerCase());
  }, [query, search]);
  
  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter first letters in English (e.g., 'mlks' for ਮਲਕਸ)"
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white border 
            border-gray-300 rounded-lg focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 
            dark:border-gray-700 dark:text-white"
          disabled={loading}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </form>
  );
}