import { Users, Music, Utensils, Mic } from 'lucide-react';

export default function Banquets() {
  const venues = [
    {
      name: 'Grand Ballroom',
      capacity: '500-800 Guests',
      area: '5000 sq ft',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Crystal Chandeliers', 'Flexible Layout', 'Built-in AV System', 'Separate Entrance'],
      description: 'Majestic venue perfect for grand celebrations, product launches, and large conferences',
    },
    {
      name: 'Crystal Lounge',
      capacity: '200-350 Guests',
      area: '2500 sq ft',
      image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Elegant Decor', 'Natural Light', 'Private Bar', 'Dance Floor'],
      description: 'Sophisticated space ideal for cocktail receptions, weddings, and gala dinners',
    },
    {
      name: 'Business Center',
      capacity: '50-150 Guests',
      area: '1500 sq ft',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Modern Tech', 'WiFi Setup', 'Breakout Rooms', 'Coffee Bar'],
      description: 'Professional environment for seminars, workshops, and corporate meetings',
    },
    {
      name: 'Emerald Hall',
      capacity: '100-250 Guests',
      area: '2000 sq ft',
      image: 'https://images.pexels.com/photos/1854076/pexels-photo-1854076.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Green Aesthetics', 'Flexible Setup', 'Outdoor Access', 'Lounge Area'],
      description: 'Versatile hall perfect for intimate gatherings and special events',
    },
    {
      name: 'Platinum Pavilion',
      capacity: '300-500 Guests',
      area: '3500 sq ft',
      image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Premium Setup', 'Multiple Rooms', 'Catering Kitchen', 'VIP Lounge'],
      description: 'Premium venue for weddings, formal dinners, and prestigious events',
    },
    {
      name: 'Garden Terrace',
      capacity: '150-300 Guests',
      area: '2000 sq ft',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Open Air', 'Scenic Views', 'Weather Protection', 'Outdoor Kitchen'],
      description: 'Beautiful outdoor space perfect for garden parties and daytime events',
    },
  ];

  const services = [
    {
      icon: Utensils,
      title: 'Gourmet Catering',
      description: 'World-class cuisine with customizable menus for all preferences',
    },
    {
      icon: Music,
      title: 'Entertainment',
      description: 'Professional DJs, bands, and entertainment for your event',
    },
    {
      icon: Mic,
      title: 'Event Coordination',
      description: 'Expert planning and execution of your special occasion',
    },
    {
      icon: Users,
      title: 'Guest Services',
      description: 'Room accommodations and hospitality for your guests',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Banquet & Event Spaces</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Stunning venues designed for your unforgettable events and celebrations
            </p>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{venue.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{venue.description}</p>

                  {/* Details */}
                  <div className="space-y-2 mb-4 pb-4 border-b border-slate-200">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-amber-600" />
                      <span className="text-sm text-slate-600">{venue.capacity}</span>
                    </div>
                    <p className="text-sm text-slate-600">Area: {venue.area}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {venue.features.map((feature, i) => (
                        <span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            Complete Event Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:shadow-lg transition-shadow text-center"
                >
                  <Icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            Events We Host
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Weddings', desc: 'Make your special day unforgettable with our wedding packages' },
              { title: 'Corporate Events', desc: 'Impress clients with professional conference and meeting facilities' },
              { title: 'Product Launches', desc: 'Showcase your innovations in elegant venues with media support' },
              { title: 'Gala Dinners', desc: 'Host prestigious dinners with exquisite catering and ambiance' },
              { title: 'Conferences', desc: 'Large-scale events with breakout rooms and tech support' },
              { title: 'Social Gatherings', desc: 'Birthdays, anniversaries, and family celebrations' },
            ].map((event, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
                <p className="text-slate-600">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Menu Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Catering"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Gourmet Catering</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Our award-winning culinary team crafts exquisite menus tailored to your preferences. From international cuisine to local delicacies, we ensure every bite is memorable.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Multi-cuisine options',
                  'Dietary accommodations',
                  'Premium beverage selection',
                  'Live food stations',
                  'Professional serving staff',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            Event Planning Process
          </h2>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your vision and requirements with our event team' },
              { step: '2', title: 'Planning', desc: 'Customize your event with our comprehensive options' },
              { step: '3', title: 'Coordination', desc: 'Our experts handle all logistics and arrangements' },
              { step: '4', title: 'Execution', desc: 'Perfect event delivery with dedicated on-site staff' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Plan Your Perfect Event</h2>
          <p className="text-xl mb-8 text-amber-50">Let our expert team make your celebration extraordinary</p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
