import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader } from 'lucide-react';
import { useDbStore } from '../lib/db';

export function ShabadPage() {
  const { shabadId } = useParams<{ shabadId: string }>();
  const { loading, error, shabadVerses, getShabad } = useDbStore();

  useEffect(() => {
    if (shabadId) {
      getShabad(parseInt(shabadId, 10));
    }
  }, [shabadId, getShabad]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error || !shabadVerses.length) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-red-500 dark:text-red-400 mb-4">
            {error || 'Shabad not found'}
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-blue-500 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        to="/"
        className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to search
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 space-y-6">
          {shabadVerses.map((verse, index) => (
            <p
              key={index}
              className="text-2xl text-gray-900 dark:text-white font-gurbani leading-relaxed"
            >
              {verse.gurmukhi}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}