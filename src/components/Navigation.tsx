import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'banquets', label: 'Banquets' },
    { id: 'restaurants', label: 'Restaurants' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <img
              src="/logo.png"
              alt="Hotel Vaishnavi Heights"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`text-sm font-semibold transition-all duration-300 ${
                  currentPage === link.id
                    ? 'text-amber-700 border-b-2 border-amber-700 pb-1'
                    : 'text-slate-700 hover:text-amber-700'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-semibold transition-all ${
                  currentPage === link.id
                    ? 'text-amber-700 bg-amber-50'
                    : 'text-slate-700 hover:bg-amber-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button className="w-full m-4 mt-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-lg font-semibold">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
