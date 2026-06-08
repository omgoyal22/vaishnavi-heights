import { ArrowRight, Calendar, MapPin, Phone, Star, Users, Utensils, Waves, Wifi, Dumbbell } from 'lucide-react';

export default function Home() {
  const gallery = [
    { src: '/images/exterior-night.png', alt: 'Hotel exterior at night' },
    { src: '/images/rooftop-pool.png', alt: 'Rooftop pool view' },
    { src: '/images/restaurant.png', alt: 'Restaurant dining area' },
    { src: '/images/lobby.png', alt: 'Hotel lobby' },
    { src: '/images/banquet.png', alt: 'Banquet hall setup' },
    { src: '/images/chandelier.png', alt: 'Grand chandelier' },
    { src: '/images/room-view.png', alt: 'Room view and balcony' },
  ];

  const features = [
    {
      icon: Star,
      title: 'Luxury Rooms',
      description: 'Elegantly designed suites with premium bedding and modern amenities',
    },
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'World-class cuisine prepared by expert chefs in our signature restaurant',
    },
    {
      icon: Waves,
      title: 'Spa & Wellness',
      description: 'Rejuvenate at our full-service spa with therapeutic treatments',
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym facilities with personal training available',
    },
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Seamless connectivity throughout the hotel premises',
    },
    {
      icon: Users,
      title: 'Event Spaces',
      description: 'Versatile banquet halls perfect for weddings and conferences',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      text: 'Exceptional service and comfort. The staff went above and beyond to make my stay memorable.',
    },
    {
      name: 'Michael Chen',
      role: 'Wedding Guest',
      text: 'The banquet facilities were outstanding. Our family gathering was perfectly coordinated.',
    },
    {
      name: 'Emma Wilson',
      role: 'Leisure Guest',
      text: 'A perfect retreat. The spa and fine dining were absolutely delightful experiences.',
    },
  ];

  return (
    <div className="bg-[#07060A]">
      {/* Hero + Gallery */}
      <section className="relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl"></div>
          <div className="absolute top-24 -right-20 h-80 w-80 rounded-full bg-brand-maroon/25 blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(197,160,77,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_15%,rgba(125,60,60,0.25),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.95))]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14 md:pt-20 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Brand copy */}
            <div className="lg:col-span-5">
              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-white animate-fade-in-up">
                A stay that feels
                <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#F3E3B2,#C5A04D,#7D3C3C)]">
                  quietly iconic.
                </span>
              </h1>

              <p className="mt-5 text-slate-200/90 text-lg md:text-xl max-w-xl animate-fade-in-up">
                Spacious rooms, skyline views, refined dining, and celebration-ready banquets. Make your days special with us.
              </p>

              {/* Quick actions */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3 animate-fade-in-up">
                <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold px-6 py-3 text-slate-950 font-semibold hover:brightness-110 transition">
                  <Calendar className="h-5 w-5" />
                  Check availability
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-semibold hover:bg-white/10 transition">
                  <Phone className="h-5 w-5 text-brand-gold" />
                  Call for booking
                </button>
              </div>

              {/* Micro info */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in-up">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-white/60">Location</p>
                  <p className="mt-1 text-white font-semibold inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-gold" />
                    Prime city access
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-white/60">Signature</p>
                  <p className="mt-1 text-white font-semibold">Rooftop pool</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-white/60">Events</p>
                  <p className="mt-1 text-white font-semibold inline-flex items-center gap-2">
                    <Users className="h-4 w-4 text-brand-gold" />
                    Banquets & weddings
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Photo mosaic */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-[radial-gradient(800px_circle_at_30%_0%,rgba(197,160,77,0.18),transparent_45%)]"></div>

                <div className="grid grid-cols-12 gap-3 md:gap-4">
                  <div className="col-span-12 md:col-span-7 row-span-2 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                    <img
                      src={gallery[0].src}
                      alt={gallery[0].alt}
                      className="h-64 md:h-[420px] w-full object-cover hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>

                  <div className="col-span-6 md:col-span-5 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
                    <img
                      src={gallery[1].src}
                      alt={gallery[1].alt}
                      className="h-40 md:h-[200px] w-full object-cover hover:scale-[1.04] transition-transform duration-700"
                    />
                  </div>

                  <div className="col-span-6 md:col-span-5 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
                    <img
                      src={gallery[3].src}
                      alt={gallery[3].alt}
                      className="h-40 md:h-[200px] w-full object-cover hover:scale-[1.04] transition-transform duration-700"
                    />
                  </div>

                  <div className="col-span-12 grid grid-cols-3 gap-3 md:gap-4">
                    {[gallery[2], gallery[4], gallery[6]].map((img) => (
                      <div
                        key={img.src}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-28 md:h-[150px] w-full object-cover hover:scale-[1.06] transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between text-sm text-white/60">
                  <p>Real photos from Hotel Vaishnavi Heights.</p>
                  <p className="hidden sm:block">Scroll to explore more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-gradient-to-b from-[#0B0A0F] to-[#0F0F15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl hover:bg-white/10 transition">
              <h3 className="font-display text-3xl text-white mb-2">500+</h3>
              <p className="text-white/70">Rooms & Suites</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl hover:bg-white/10 transition">
              <h3 className="font-display text-3xl text-white mb-2">25+</h3>
              <p className="text-white/70">Years of Excellence</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl hover:bg-white/10 transition">
              <h3 className="font-display text-3xl text-white mb-2">5000+</h3>
              <p className="text-white/70">Happy Guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="py-20 bg-[#0F0F15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              World-Class Amenities
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Discover the perfect blend of comfort, luxury, and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-xl"
                >
                  <Icon className="w-12 h-12 text-brand-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Exclusive Offers
              </h2>
              <ul className="space-y-4 text-white text-lg">
                <li className="flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  <span>30% off for extended stays</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  <span>Complimentary spa treatments</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  <span>Free airport transfers</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-6 h-6" />
                  <span>Priority dining reservations</span>
                </li>
              </ul>
              <button className="mt-8 bg-white text-amber-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                Claim Offer
              </button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Book with Confidence</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-amber-700">1</span>
                  </div>
                  <span className="text-slate-700">Select your perfect room</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-amber-700">2</span>
                  </div>
                  <span className="text-slate-700">Choose your check-in date</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-amber-700">3</span>
                  </div>
                  <span className="text-slate-700">Enjoy your stay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Guest Reviews
            </h2>
            <p className="text-xl text-slate-600">
              What our valued guests have to say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-amber-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today to book your perfect getaway or event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book Now
            </button>
            <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
