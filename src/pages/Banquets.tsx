import { useState } from 'react';
import { Users, Music, Mic } from 'lucide-react';
import BanquetInquiryModal from '../components/BanquetInquiryModal';

export default function Banquets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState('Jashn Hall (300 Pax)');
  const venues = [
    {
      name: 'Jashn Hall',
      capacity: '300 Pax',
      area: '3300 Sq.Ft',
      image: '/rooms_image/IMG_6048.jpeg',
      features: ['Grand Setup', 'Elegant Decor', 'Catering Available', 'AV System'],
      description: 'Spacious banquet hall perfect for weddings, grand parties, and large scale celebrations.',
    },
    {
      name: 'Royal Darbar',
      capacity: '150-200 Pax',
      area: '2300 Sq.Ft',
      image: '/rooms_image/IMG_6050.jpeg',
      features: ['Royal Ambience', 'Flexible Layout', 'Dedicated Entry', 'Custom Lighting'],
      description: 'Elegant venue ideal for mid-sized events, receptions, and family gatherings.',
    },
    {
      name: 'Business Conference Hall',
      capacity: '50 Pax',
      area: '750 Sq.Ft',
      image: '/rooms_image/IMG_6052.jpeg',
      features: ['Corporate Setup', 'Projector Ready', 'High-Speed WiFi', 'Coffee Break Area'],
      description: 'Professional space designed for corporate meetings, conferences, and intimate workshops.',
    },
  ];

  const services = [
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
                  <button
                    onClick={() => {
                      setSelectedVenue(venue.name);
                      setIsModalOpen(true);
                    }}
                    className="block text-center w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <button
            onClick={() => {
              setSelectedVenue('Jashn Hall (300 Pax)');
              setIsModalOpen(true);
            }}
            className="inline-block bg-white text-amber-700 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-amber-50 shadow-xl transition-all hover:scale-105"
          >
            Inquire for Event Booking
          </button>
        </div>
      </section>

      {/* Banquet Inquiry Modal */}
      <BanquetInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialVenue={selectedVenue}
      />
    </div>
  );
}
