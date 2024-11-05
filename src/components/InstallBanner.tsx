import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function InstallBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if app is installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches ||
                       window.navigator.standalone ||
                       document.referrer.includes('android-app://');

    // Check if user has previously dismissed the banner
    const isDismissed = localStorage.getItem('installBannerDismissed') === 'true';

    // Only show banner if not installed and not previously dismissed
    if (!isInstalled && !isDismissed) {
      const handler = (e: any) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowBanner(true);
      };

      window.addEventListener('beforeinstallprompt', handler);
      
      // If we're eligible for installation but haven't received the prompt yet,
      // show the banner anyway
      if (!isDismissed) {
        setShowBanner(true);
      }

      return () => window.removeEventListener('beforeinstallprompt', handler);
    }
  }, []);

  const handleInstall = () => {
    navigate('/install');
    handleDismiss();
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('installBannerDismissed', 'true');
  };

  if (!showBanner) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Download className="h-5 w-5" />
            <p className="text-sm font-medium">
              Install our app for a better experience with offline access
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handleInstall}
              className="px-4 py-1.5 bg-white text-blue-600 text-sm font-medium rounded-full 
                hover:bg-blue-50 transition-colors duration-150"
            >
              Learn More
            </button>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-blue-500 rounded-full transition-colors duration-150"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}