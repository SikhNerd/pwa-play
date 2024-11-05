import { Monitor, Smartphone, Chrome, Globe } from 'lucide-react';

export function InstallPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Install Gurbani Search
      </h1>
      
      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Smartphone className="h-5 w-5 mr-2 text-blue-500" />
            Install on Mobile
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">iOS (Safari)</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Open Safari and visit this website</li>
                <li>Tap the Share button (box with arrow)</li>
                <li>Tap "Add to Home Screen"</li>
                <li>Tap "Add" to confirm</li>
              </ol>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Android (Chrome)</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Open Chrome and visit this website</li>
                <li>Tap the menu (three dots)</li>
                <li>Tap "Add to Home screen"</li>
                <li>Tap "Add" to confirm</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Monitor className="h-5 w-5 mr-2 text-blue-500" />
            Install on Desktop
          </h2>
          
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Chrome className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-medium text-gray-900 dark:text-white">Chrome</h3>
              </div>
              <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>1. Click the install icon in the address bar</li>
                <li>2. Click "Install" in the prompt</li>
              </ol>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Globe className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-medium text-gray-900 dark:text-white">Firefox</h3>
              </div>
              <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>1. Click the menu (three lines)</li>
                <li>2. Click "Install app"</li>
              </ol>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Globe className="h-5 w-5 text-blue-500 mr-2" />
                <h3 className="font-medium text-gray-900 dark:text-white">Safari</h3>
              </div>
              <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>1. File menu → Add to Dock</li>
                <li>2. Click "Add" to confirm</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}