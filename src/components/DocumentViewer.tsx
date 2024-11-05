import { X } from 'lucide-react';
import { useDbStore } from '../lib/db';

export function DocumentViewer() {
  const { selectedDocument, clearSelectedDocument } = useDbStore();

  if (!selectedDocument) return null;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {selectedDocument.title}
          </h2>
          <button
            onClick={clearSelectedDocument}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <span className="inline-block px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">
              {selectedDocument.category}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {selectedDocument.description}
          </p>
          <div className="prose dark:prose-invert max-w-none">
            {selectedDocument.content || selectedDocument.description}
          </div>
        </div>
      </div>
    </div>
  );
}