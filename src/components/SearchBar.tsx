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
      <div className="relative flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter first letters in English (e.g., 'mlks' for ਮਲਕਸ)"
          className="w-full px-4 py-2 pl-10 text-gray-900 bg-white border 
            border-r-0 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 
            dark:border-gray-700 dark:text-white"
          disabled={loading}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed transition-colors
            dark:focus:ring-offset-gray-900"
        >
          Search
        </button>
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </form>
  );
}