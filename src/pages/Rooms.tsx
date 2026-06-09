import { Star, Users, Maximize2, Wifi, Sparkles, Heart, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Rooms() {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  const rooms = [
    {
      name: 'Standard Room',
      price: '₹3,500',
      capacity: '2 Guests',
      area: '350 sq ft',
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['King Bed', 'AC', 'WiFi', 'Shower', 'Smart TV', 'Work Desk'],
      description: 'Perfect for business travelers seeking comfort and convenience.',
      rating: 4.5,
      badge: 'Popular',
    },
    {
      name: 'Deluxe Room',
      price: '₹5,000',
      capacity: '2-3 Guests',
      area: '500 sq ft',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['King Bed', 'Sofa', 'AC', 'WiFi', 'TV', 'Marble Bathroom'],
      description: 'Elevated elegance with spacious layouts and premium furnishings.',
      rating: 4.7,
      badge: 'Best Value',
    },
    {
      name: 'Suite',
      price: '₹8,000',
      capacity: '2-4 Guests',
      area: '800 sq ft',
      image: 'https://images.pexels.com/photos/1579824/pexels-photo-1579824.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['King Bed', 'Living Room', 'Kitchenette', 'Spa Tub', 'WiFi', 'Lounge'],
      description: 'Luxury living with separate spaces perfect for families.',
      rating: 4.9,
      badge: 'Luxury',
    },
    {
      name: 'Presidential Suite',
      price: '₹12,000',
      capacity: '2-6 Guests',
      area: '1200 sq ft',
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Multiple Bedrooms', 'Lounge', 'Full Kitchen', 'Jacuzzi', 'Concierge', 'Private Terrace'],
      description: 'Ultimate luxury with exclusive amenities and personalized service.',
      rating: 5.0,
      badge: 'Elite',
    },
    {
      name: 'Business Room',
      price: '₹4,500',
      capacity: '1-2 Guests',
      area: '400 sq ft',
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Queen Bed', 'Work Desk', 'High-Speed WiFi', 'Conference Phone', 'Printer'],
      description: 'Perfectly designed for business professionals.',
      rating: 4.6,
      badge: 'Corporate',
    },
    {
      name: 'Family Villa',
      price: '₹10,000',
      capacity: '4-6 Guests',
      area: '1000 sq ft',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Multiple Rooms', 'Lounge', 'Kitchenette', 'Games', 'WiFi', 'Family Bath'],
      description: 'Ideal for families with multiple bedrooms and entertainment.',
      rating: 4.8,
      badge: 'Family Choice',
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
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                  Explore Rooms
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3 text-white font-semibold hover:bg-white/10 transition-all">
                  <Heart className="w-4 h-4" />
                  Wishlist
                </button>
              </div>
            </div>

            {/* Large Featured Image */}
            <div className="relative h-96 md:h-full rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/1579824/pexels-photo-1579824.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-amber-900/10 to-slate-900"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 -left-32 h-72 w-72 rounded-full bg-amber-600/15 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Offers - Premium Gradient Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-[32px] shadow-2xl opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)] rounded-[32px]"></div>
              
              <div className="relative p-10 md:p-14 text-white rounded-[32px] h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6 border border-white/30">
                    <Sparkles className="w-4 h-4 text-amber-200" />
                    <span className="text-sm font-semibold">Limited Time Deals</span>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl font-black mb-2 leading-tight">Exclusive<br />Offers</h2>
                  <p className="text-amber-100 mb-10 text-lg font-light">Premium benefits for our valued guests</p>

                  <div className="space-y-5">
                    {offers.map((offer, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group/item cursor-pointer"
                      >
                        <div className="text-4xl flex-shrink-0 bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          {offer.icon}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="font-bold text-lg group-hover/item:translate-x-2 transition-transform duration-300">{offer.title}</p>
                          <p className="text-amber-100 text-sm mt-1">{offer.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-10 w-full bg-white text-amber-700 rounded-full py-4 font-black text-lg hover:bg-amber-50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/50 transform hover:scale-105">
                  Claim Your Offer
                </button>
              </div>
            </div>

            {/* Right: Booking Info - Elegant White Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-[32px] shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50 rounded-[32px]"></div>
              
              <div className="relative p-10 md:p-14 rounded-[32px] h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-amber-50 rounded-full px-4 py-2 mb-6 border border-amber-200">
                    <Heart className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-semibold text-amber-700">Easy Booking</span>
                  </div>

                  <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 leading-tight">Book with<br /><span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">Confidence</span></h3>

                  <div className="space-y-6">
                    {[
                      { num: '1', title: 'Select your perfect room', desc: 'Browse our curated collection of luxury accommodations' },
                      { num: '2', title: 'Choose your check-in date', desc: 'Flexible calendar with real-time availability' },
                      { num: '3', title: 'Enjoy your stay', desc: 'World-class service awaits you' },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-5 items-start group/step">
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-white font-black text-2xl flex items-center justify-center shadow-lg group-hover/step:scale-110 transition-transform duration-300 group-hover/step:shadow-xl group-hover/step:shadow-amber-400/50">
                          {step.num}
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="font-bold text-slate-900 text-lg group-hover/step:text-amber-600 transition-colors">{step.title}</p>
                          <p className="text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-10 w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white rounded-full py-4 font-black text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group/btn">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Your Booking
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
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
                  <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-full font-bold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 group-hover:scale-105 transform">
                    View & Book Now
                  </button>
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
          <button className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
            Reserve Your Room Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
