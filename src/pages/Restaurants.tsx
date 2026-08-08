import { Coffee, Leaf, Star, Utensils, X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
const diningHighlights = [
  {
    icon: Utensils,
    title: 'Signature Dining',
    description: 'A curated menu blending regional favorites with global gourmet cuisine.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'Seasonal produce and handcrafted dishes made from scratch each day.',
  },
  {
    icon: Coffee,
    title: 'Breakfast & Brunch',
    description: 'Delightful mornings with fresh pastries, artisanal coffee, and made-to-order delights.',
  },
  {
    icon: Star,
    title: 'Private Dining',
    description: 'Exclusive seating for intimate gatherings and special celebrations.',
  },
];

const restaurantMenus = [
  {
    name: 'Royal Feast',
    price: '₹1,350',
    description: 'A multi-course dining experience with premium appetizers, main course, and dessert.',
  },
  {
    name: 'Heritage Platter',
    price: '₹950',
    description: 'Traditional flavors with modern presentation, inspired by local cuisine.',
  },
  {
    name: 'Chef’s Tasting',
    price: '₹1,650',
    description: 'An elegant selection of daily chef specials paired with signature cocktails.',
  },
];

const DiningReservationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // NOTE: Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_t145bv8',
        'template_4ttch8z',
        {
          to_name: 'Vaishnavi Heights Restaurant',
          from_name: formData.name,
          phone: formData.phone,
          guests: formData.guests,
          date: formData.date,
          time: formData.time,
        },
        'vwzmsMYG5ZP4_-FuJ'
      );
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: '', phone: '', guests: '2', date: '', time: '19:00' });
      }, 3000);
    } catch (error) {
      console.error('Failed to send reservation:', error);
      alert('Failed to send reservation. Please check your EmailJS configuration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md p-6 relative shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition">
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-12">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Reservation Request Sent!</h3>
            <p className="text-slate-600">We will confirm your table shortly.</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Reserve a Table</h2>
              <p className="text-slate-600 text-sm mt-1">Fill out the details below and we'll get back to you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Phone Number</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1">Number of Guests</label>
                <input required type="number" min="1" max="20" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1">Date</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1">Time</label>
                  <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-amber-500 text-slate-900 font-bold py-3 rounded-xl mt-6 hover:bg-amber-400 transition disabled:opacity-50">
                {isSubmitting ? 'Sending...' : 'Confirm Request'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default function Restaurants() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-900">
      <DiningReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,213,113,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.16),transparent_35%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Dining</p>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Discover our dining
                <span className="block text-amber-300">for every mood and moment.</span>
              </h1>
              <p className="max-w-xl text-slate-200 text-lg leading-relaxed">
                Experience our Multi-Cuisine Restaurant serving authentic Indian, Chinese & Continental cuisine in a warm, welcoming setting. Whether you are enjoying a quiet dinner or celebrating with friends, our dining experience brings refined hospitality to every table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition">
                  Reserve a table
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
                  View menu
                </button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl overflow-hidden bg-white/10 shadow-2xl">
                <img
                  src="/dinning/IMG_6097.jpeg"
                  alt="Dining area"
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl overflow-hidden bg-white/10 shadow-2xl">
                  <img
                    src="/dinning/IMG_6101.jpeg"
                    alt="Dining table setup"
                    className="h-36 w-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden bg-white/10 shadow-2xl">
                  <img
                    src="/dinning/IMG_6102.jpeg"
                    alt="Warm dining atmosphere"
                    className="h-36 w-full object-cover"
                  />
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden bg-white/10 shadow-2xl">
                <img
                  src="/dinning/IMG_6104.jpeg"
                  alt="Dining presentation"
                  className="h-36 w-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden bg-white/10 shadow-2xl">
                <img
                  src="/dinning/IMG_6106.jpeg"
                  alt="Dining ambiance"
                  className="h-36 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 uppercase tracking-widest">
            Special Dining Offers Coming Soon!
          </h2>
          <p className="mt-2 text-slate-900 font-semibold text-lg">Stay tuned for exclusive weekend brunches, couple dinners, and festive menus.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Dining highlights</p>
            <h2 className="mt-4 text-4xl font-bold">What makes our dining special</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {diningHighlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.title} className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-lg">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Menu favorites</p>
              <h2 className="mt-4 text-4xl font-bold">Taste the signature plates</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our restaurant showcases a refined selection of dishes designed to delight every palate. From celebratory feasts to intimate dinners, every plate is crafted with care.
              </p>
            </div>
            <div className="space-y-6">
              {restaurantMenus.map((menu) => (
                <div key={menu.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold">{menu.name}</h3>
                      <p className="text-sm text-slate-500">{menu.description}</p>
                    </div>
                    <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-600">{menu.price}</span>
                  </div>
                  <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition">
                    Order this experience
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-12 text-white shadow-2xl">
            <div className="grid gap-10 lg:grid-cols-3 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Plan your visit</p>
                <h2 className="mt-4 text-4xl font-bold">Private dining, celebrations, and special menus</h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>Host private dinners, family gatherings, or business meals in our elegant dining spaces.</p>
                <p>Enjoy menu personalization, wine pairings, and tailored service for every occasion.</p>
              </div>
              <a href="https://wa.me/918581888883?text=Hello,%20I%20would%20like%20to%20request%20a%20private%20dining%20quote" target="_blank" rel="noopener noreferrer" className="inline-block self-start rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition">
                Request a private dining quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
