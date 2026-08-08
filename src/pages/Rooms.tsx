import { Star, Users, Maximize2, Wifi, Sparkles, Heart, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Rooms() {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  const rooms = [
    {
      name: 'Superior Room',
      price: 'Best Rate',
      capacity: '2 Guests',
      area: '143 sq ft',
      image: '/rooms_image/IMG_6059.jpeg',
      amenities: ['Double Bed', 'AC', 'Free Wi-Fi', 'Tea/Coffee Maker', 'Room Service'],
      description: 'Comfortable stay with essential amenities, AC, LED TV, and daily housekeeping. (No Study Table/Smart TV)',
      rating: 4.5,
      badge: 'Economy',
    },
    {
      name: 'Deluxe Room',
      price: 'Best Rate',
      capacity: '2 Guests',
      area: '168 sq ft',
      image: '/rooms_image/IMG_6060.jpeg',
      amenities: ['Double Bed', 'AC', 'Smart TV', 'Study Table', 'Free Wi-Fi'],
      description: 'Upgraded comfort with a Smart TV, dedicated study table, and premium room service.',
      rating: 4.6,
      badge: 'Popular',
    },
    {
      name: 'Club Room',
      price: 'Best Rate',
      capacity: '2 Guests',
      area: '168 sq ft',
      image: '/rooms_image/IMG_6061.jpeg',
      amenities: ['Queen Bed', 'Smart TV', 'Study Table', 'Premium Interiors', 'Wi-Fi'],
      description: 'Premium interiors with a Queen Size Bed, Smart TV, and a dedicated study table.',
      rating: 4.7,
      badge: 'Premium',
    },
    {
      name: 'Executive Room',
      price: 'Best Rate',
      capacity: '2-3 Guests',
      area: '198 sq ft',
      image: '/rooms_image/IMG_6062.jpeg',
      amenities: ['King Bed', 'Smart TV', 'Study Table', 'Sofa Seating', 'Premium Amenities'],
      description: 'Spacious room featuring a King Size Bed, comfortable sofa seating, and premium amenities.',
      rating: 4.8,
      badge: 'Business',
    },
    {
      name: 'Business Suite',
      price: 'Best Rate',
      capacity: '2-4 Guests',
      area: '311 sq ft',
      image: '/rooms_image/IMG_6063.jpeg',
      amenities: ['King Bed', 'Living Area', 'Work Desk', 'Smart TV', 'Premium Bathroom'],
      description: 'Ideal for business guests, featuring a separate living area, work desk, and a premium bathroom.',
      rating: 4.9,
      badge: 'Executive',
    },
    {
      name: 'Luxury Suite',
      price: 'Best Rate',
      capacity: '2-4 Guests',
      area: '486 sq ft',
      image: '/rooms_image/IMG_6064.jpeg',
      amenities: ['King Bed', 'Luxury Interiors', 'Separate Living Area', 'Smart TV', 'Premium Amenities'],
      description: 'Experience true luxury with expansive interiors, a separate living area, and premium amenities.',
      rating: 5.0,
      badge: 'Luxury',
    },
    {
      name: 'Presidential Suite',
      price: 'Best Rate',
      capacity: '2-4 Guests',
      area: '455 sq ft',
      image: '/rooms_image/IMG_6065.jpeg',
      amenities: ['King Bed', 'Luxury Living Space', 'Smart TV', 'Finest Suite', 'Premium Hospitality'],
      description: 'Our finest suite offering exceptional luxury living space and world-class premium hospitality.',
      rating: 5.0,
      badge: 'Elite',
    },
  ];

  const offers = [
    { icon: '⭐', title: '30% off for extended stays', subtitle: 'Book 7+ nights' },
    { icon: '💆', title: 'Complimentary spa treatments', subtitle: 'For suite guests' },
    { icon: '🚗', title: 'Free airport transfers', subtitle: 'On all bookings' },
    { icon: '🍽️', title: 'Priority dining reservations', subtitle: 'At our restaurants' },
  ];

  return (
    <div className="bg-slate-900">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden pt-0">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl"></div>
          <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-amber-600/15 blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_30%_0%,rgba(248,113,113,0.25),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.8))]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 border border-white/20 w-fit">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold">Luxury Accommodations</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Rooms that inspire
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  unforgettable moments
                </span>
              </h1>
              <p className="text-lg text-slate-200 max-w-xl leading-relaxed">
                Experience world-class comfort in our thoughtfully designed rooms and suites, each offering a unique blend of elegance and modern convenience.
              </p>
              <div className="pt-4">
                <p className="text-base text-slate-200 max-w-xl leading-relaxed">
                  Discover the perfect stay tailored to your comfort, style, and travel needs.
                </p>
              </div>
            </div>

            {/* Large Featured Image */}
            <div className="relative h-96 md:h-full rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="/rooms_image/IMG_6065.jpeg"
                alt="Luxury room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold">Premium Suite Room</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <section className="relative py-10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-amber-900/10 to-slate-900"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 -left-32 h-72 w-72 rounded-full bg-amber-600/15 blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            {/* Left: Offers - Compact Gradient Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-2xl shadow-xl opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)] rounded-2xl"></div>
              
              <div className="relative p-5 text-white rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-2.5 py-1 mb-2.5 border border-white/30">
                    <Sparkles className="w-3 h-3 text-amber-200" />
                    <span className="text-[10px] font-semibold tracking-wide uppercase">Limited Time</span>
                  </div>
                  
                  <h2 className="text-xl md:text-2xl font-black mb-0.5 leading-tight">Exclusive Offers</h2>
                  <p className="text-amber-100 mb-4 text-xs font-light">Premium guest benefits</p>

                  <div className="space-y-2">
                    {offers.map((offer, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group/item cursor-pointer"
                      >
                        <div className="text-lg flex-shrink-0 bg-white/20 w-8 h-8 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          {offer.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-xs truncate group-hover/item:translate-x-0.5 transition-transform duration-300">{offer.title}</p>
                          <p className="text-amber-100 text-[10px] mt-0.5">{offer.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-4 w-full bg-white text-amber-700 rounded-xl py-2 font-black text-xs hover:bg-amber-50 transition-all duration-300 shadow-md transform hover:scale-[1.02]">
                  Claim Your Offer
                </button>
              </div>
            </div>

            {/* Right: Booking Info - Compact White Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 rounded-2xl"></div>
              
              <div className="relative p-5 rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-amber-50 rounded-full px-2.5 py-1 mb-2.5 border border-amber-200">
                    <Heart className="w-3 h-3 text-amber-600" />
                    <span className="text-[10px] font-semibold text-amber-700 uppercase tracking-wide">Easy Booking</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 leading-tight">Book with <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Confidence</span></h3>

                  <div className="space-y-3">
                    {[
                      { num: '1', title: 'Select your room', desc: 'Curated luxury accommodations' },
                      { num: '2', title: 'Choose check-in date', desc: 'Real-time calendar availability' },
                      { num: '3', title: 'Enjoy your stay', desc: 'World-class hospitality awaits' },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-2.5 items-center group/step">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white font-black text-xs flex items-center justify-center shadow group-hover/step:scale-110 transition-transform duration-300">
                          {step.num}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-slate-900 text-xs truncate group-hover/step:text-amber-600 transition-colors">{step.title}</p>
                          <p className="text-slate-500 text-[10px] truncate mt-0.5">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-4 w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white rounded-xl py-2 font-black text-xs hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-1.5">
                  Start Your Booking
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </section>

      {/* Room Collection - Premium Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Our Room Collection</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover accommodations crafted for every preference and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="group relative h-full rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-amber-500/50"
                onMouseEnter={() => setHoveredRoom(index)}
                onMouseLeave={() => setHoveredRoom(null)}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {room.price}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full text-xs font-semibold border border-white/30">
                      {room.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(room.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white text-sm font-semibold">{room.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">{room.description}</p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-700">
                    <div className="text-center">
                      <Users className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-400">{room.capacity}</p>
                    </div>
                    <div className="text-center">
                      <Maximize2 className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-400">{room.area}</p>
                    </div>
                    <div className="text-center">
                      <Wifi className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-400">High-Speed</p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">Amenities</p>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 3).map((amenity, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-300 px-3 py-1.5 rounded-full border border-amber-500/30 font-medium"
                        >
                          ✓ {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="text-xs text-slate-400 px-3 py-1.5">
                          +{room.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <a href={`https://wa.me/918581888883?text=Hello,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(room.name)}`} target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-full font-bold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 group-hover:scale-105 transform">
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-amber-600/20 blur-3xl"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for your perfect stay?</h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Choose from our exceptional collection of rooms and experience hospitality like never before.
          </p>
          <a href="https://wa.me/918581888883?text=Hello,%20I%20would%20like%20to%20reserve%20a%20room" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
            Reserve Your Room Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
