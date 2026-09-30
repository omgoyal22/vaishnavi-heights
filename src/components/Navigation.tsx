import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

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
    { id: 'restaurants', label: 'Dining' },
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
          <div className="hidden lg:flex items-center gap-7">
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

          {/* Action Buttons: Call & WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            {/* Call Button */}
            <a
              href="tel:+918581888883"
              className="flex items-center gap-2 border border-amber-600/30 bg-amber-50/60 hover:bg-amber-100/70 text-amber-800 px-4 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call Us</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918581888883?text=Hello%20Hotel%20Vaishnavi%20Heights%2C%20I%20would%20like%20to%20inquire%20about%20a%20booking"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-lg font-semibold text-sm shadow hover:shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:+918581888883"
              className="p-2 rounded-lg bg-amber-100 text-amber-800"
              aria-label="Call Hotel"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/918581888883?text=Hello%20Hotel%20Vaishnavi%20Heights"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-[#25D366]" />
            </a>
            <button
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
            <div className="grid grid-cols-2 gap-3 px-4 pt-3 border-t border-slate-100">
              <a
                href="tel:+918581888883"
                className="flex items-center justify-center gap-2 bg-amber-600 text-white py-2.5 rounded-lg font-semibold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/918581888883?text=Hello%20Hotel%20Vaishnavi%20Heights"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-lg font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
