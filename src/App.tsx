import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import { ShabadPage } from './pages/ShabadPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { InstallPage } from './pages/InstallPage';
import { Navigation } from './components/Navigation';
import { InstallBanner } from './components/InstallBanner';
import { OfflineStatus } from './components/OfflineStatus';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <InstallBanner />
        <Navigation />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/shabad/:shabadId" element={<ShabadPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/install" element={<InstallPage />} />
        </Routes>
        <OfflineStatus />
      </div>
    </Router>
  );
}