import { Coffee, Leaf, Star, Utensils } from 'lucide-react';

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

export default function Restaurants() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,213,113,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.16),transparent_35%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Dining</p>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Discover our restaurant
                <span className="block text-amber-300">for every mood and moment.</span>
              </h1>
              <p className="max-w-xl text-slate-200 text-lg leading-relaxed">
                Experience elegant dining, handcrafted cocktails, and locally inspired flavors in a warm, welcoming setting. Whether you are enjoying a quiet dinner or celebrating with friends, our restaurant brings refined hospitality to every table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition">
                  Reserve a table
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
                  View menu
                </button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl overflow-hidden bg-white/10 shadow-2xl">
                <img
                  src="/images/restaurant.png"
                  alt="Restaurant dining area"
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden bg-white/10 shadow-2xl">
                  <img
                    src="/images/exterior-night.png"
                    alt="Restaurant terrace"
                    className="h-36 w-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden bg-white/10 shadow-2xl">
                  <img
                    src="/images/lobby.png"
                    alt="Warm restaurant atmosphere"
                    className="h-36 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Restaurant highlights</p>
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
              <button className="self-start rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-400 transition">
                Request a private dining quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
