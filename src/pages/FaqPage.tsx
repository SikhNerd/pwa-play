export function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Frequently Asked Questions
      </h1>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            How does offline search work?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our app uses SQLite running directly in your browser, allowing for fast and 
            efficient searches even without an internet connection.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Can I use this on mobile devices?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Yes! Our PWA can be installed on both iOS and Android devices. Check out our 
            Install page for detailed instructions.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Is my data secure?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            All data is stored locally on your device and no information is sent to any 
            external servers.
          </p>
        </div>
      </div>
    </div>
  );
}