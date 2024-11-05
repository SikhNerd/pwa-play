import { useEffect } from 'react';
import { ScanSearch } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { useDbStore } from '../lib/db';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function SearchPage() {
  const initialize = useDbStore(state => state.initialize);
  const isOnline = useOnlineStatus();
  
  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <ScanSearch className="h-12 w-12 mx-auto text-blue-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Gurbani Search
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Search Gurbani using first letters in English{' '}
          {!isOnline && <span className="text-yellow-500">- Working Offline</span>}
        </p>
      </div>
      
      <div className="flex flex-col items-center space-y-8">
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
}