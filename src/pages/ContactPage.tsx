import { Mail } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Contact Us
      </h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-3">
          <Mail className="h-6 w-6 text-blue-500" />
          <a
            href="mailto:contact@contact.com"
            className="text-lg text-blue-500 hover:text-blue-600"
          >
            contact@contact.com
          </a>
        </div>
      </div>
    </div>
  );
}