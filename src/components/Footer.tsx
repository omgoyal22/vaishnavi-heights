import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: any) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Hotel Vaishnavi Heights</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Experience luxury hospitality with world-class amenities, premium accommodations, and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'rooms', 'banquets', 'restaurants', 'gallery', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link)}
                    className="text-slate-300 hover:text-amber-400 transition-colors capitalize text-sm"
                  >
                    {link === 'home'
                      ? 'Home'
                      : link === 'about'
                      ? 'About Us'
                      : link === 'rooms'
                      ? 'Rooms'
                      : link === 'banquets'
                      ? 'Banquets'
                      : link === 'restaurants'
                      ? 'Restaurants'
                      : link === 'gallery'
                      ? 'Gallery'
                      : 'Contact'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 text-sm">123 Heritage Lane, City, State 12345</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-amber-400" />
                <p className="text-slate-300 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-amber-400" />
                <p className="text-slate-300 text-sm">info@vaishnavi.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} Hotel Vaishnavi Heights. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm text-slate-400">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
