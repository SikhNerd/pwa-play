import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Loader } from 'lucide-react';
import { useDbStore } from '../lib/db';

export function DocumentPage() {
  const { id } = useParams<{ id: string }>();
  const { selectedDocument, getDocument, loading, error } = useDbStore();

  useEffect(() => {
    if (id) {
      getDocument(parseInt(id, 10));
    }
  }, [id, getDocument]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error || !selectedDocument) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-red-500 dark:text-red-400 mb-4">
            {error || 'Document not found'}
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

      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {selectedDocument.title}
          </h1>
          
          <div className="mb-6">
            <span className="inline-block px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">
              {selectedDocument.category}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {selectedDocument.description}
          </p>

          <div className="prose dark:prose-invert max-w-none">
            {selectedDocument.content || selectedDocument.description}
          </div>
        </div>
      </article>
    </div>
  );
}