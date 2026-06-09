import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Banquets from './pages/Banquets';
import Gallery from './pages/Gallery';
import Restaurants from './pages/Restaurants';
import Contact from './pages/Contact';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'rooms' | 'banquets' | 'gallery' | 'restaurants' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

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
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
