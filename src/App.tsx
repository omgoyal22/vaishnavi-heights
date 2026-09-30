import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Banquets from './pages/Banquets';
import Gallery from './pages/Gallery';
import Restaurants from './pages/Restaurants';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import OfferBanner from './components/OfferBanner';

type Page = 'home' | 'about' | 'rooms' | 'banquets' | 'gallery' | 'restaurants' | 'contact';

export default function App() {
  const checkIsAdmin = () => {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    return path === '/admin' || hash === '#/admin' || search.includes('admin');
  };

  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAdminRoute, setIsAdminRoute] = useState(checkIsAdmin());

  useEffect(() => {
    const handleLocationChange = () => {
      setIsAdminRoute(checkIsAdmin());
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  if (isAdminRoute) {
    return <Admin />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'rooms':
        return <Rooms />;
      case 'banquets':
        return <Banquets />;
      case 'gallery':
        return <Gallery />;
      case 'restaurants':
        return <Restaurants />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      <OfferBanner />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <FloatingActions />
    </div>
  );
}

