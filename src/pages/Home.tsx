import { Star, Wifi, Utensils, Dumbbell, Waves, Users } from 'lucide-react';

export default function Home() {
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
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src="/logo.png"
              alt="Hotel Vaishnavi Heights Logo"
              className="h-48 w-auto mx-auto mb-6 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Luxury & Elegance
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Make Your Days Special With Us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Book Your Stay
            </button>
            <button className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300">
              Explore Rooms
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-amber-400 text-sm font-semibold">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-amber-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">500+</h3>
              <p className="text-slate-600">Rooms & Suites</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-amber-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">25+</h3>
              <p className="text-slate-600">Years of Excellence</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-amber-600">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">5000+</h3>
              <p className="text-slate-600">Happy Guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover the perfect blend of comfort, luxury, and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 hover:from-amber-50 hover:to-amber-100 transition-all duration-300 border border-slate-200 hover:border-amber-300 hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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
