import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-blue-600 dark:text-blue-400">
            SQLite Search
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive('/about')
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              About
            </Link>
            
            <Link
              to="/faq"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive('/faq')
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              FAQ
            </Link>
            
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${isActive('/contact')
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              Contact
            </Link>
            
            <Link
              to="/install"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1
                ${isActive('/install')
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              <Download className="h-4 w-4" />
              <span>Install</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}