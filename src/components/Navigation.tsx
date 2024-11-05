import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, HelpCircle, Info, Mail, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const NavLink = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        isActive(to)
          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
      }`}
    >
      <Icon className="h-4 w-4 mr-1.5" />
      {children}
    </Link>
  );

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-gray-900 dark:text-white">
            Gurbani Search
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/about" icon={Info}>About</NavLink>
            <NavLink to="/faq" icon={HelpCircle}>FAQ</NavLink>
            <NavLink to="/contact" icon={Mail}>Contact</NavLink>
            <NavLink to="/install" icon={Download}>Install</NavLink>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/about" icon={Info}>About</NavLink>
            <NavLink to="/faq" icon={HelpCircle}>FAQ</NavLink>
            <NavLink to="/contact" icon={Mail}>Contact</NavLink>
            <NavLink to="/install" icon={Download}>Install</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}