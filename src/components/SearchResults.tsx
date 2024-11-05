import { useNavigate } from 'react-router-dom';
import { useDbStore } from '../lib/db';
import { Search } from 'lucide-react';

export function SearchResults() {
  const { loading, error, results } = useDbStore();
  const navigate = useNavigate();
  
  const handleVerseClick = (shabadId: number) => {
    navigate(`/shabad/${shabadId}`);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="p-4 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg">
        Error: {error}
      </div>
    );
  }
  
  if (!results.length) {
    return (
      <div className="text-center p-8">
        <Search className="h-12 w-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
        <p className="text-gray-500 dark:text-gray-400">
          Enter first letters in English to search Gurbani
        </p>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-2xl mt-6 space-y-4">
      {results.map((result) => (
        <button
          key={result.id}
          onClick={() => handleVerseClick(result.shabadId)}
          className="w-full text-left bg-white dark:bg-gray-800 p-4 rounded-lg 
            shadow-sm border border-transparent hover:border-gray-200 
            dark:hover:border-gray-700 transition-all hover:shadow-md"
        >
          <p className="text-xl text-gray-900 dark:text-white font-gurbani leading-relaxed">
            {result.gurmukhi}
          </p>
        </button>
      ))}
    </div>
  );
}