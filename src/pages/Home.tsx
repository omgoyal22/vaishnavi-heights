import { useState, useEffect, useCallback, useRef } from 'react';
import {
  MapPin,
  Star,
  Users,
  Utensils,
  Waves,
  ShoppingBag,
  Bed,
  PartyPopper,
  Car,
  Bell,
  ShieldCheck,
  Zap,
  ArrowUpDown,
  Sparkles
} from 'lucide-react';
import RoomBookingModal from '../components/RoomBookingModal';

interface SlideItem {
  id: string;
  src: string;
  alt: string;
  tag: string;
  title: string;
  subtitle: string;
  category: string;
  pageTarget: 'rooms' | 'restaurants' | 'banquets' | 'gallery';
  ctaText: string;
}

interface HomeProps {
  onNavigate?: (page: 'home' | 'about' | 'rooms' | 'banquets' | 'gallery' | 'restaurants' | 'contact') => void;
}

export default function Home(_props: HomeProps = {}) {
  const slides: SlideItem[] = [
    {
      id: 'slide-1',
      src: '/rooms_image/IMG_6045.jpeg',
      alt: 'Luxury Suite & Sitting Lounge',
      tag: 'Signature Living',
      category: 'Rooms & Suites',
      title: 'Presidential & Executive Suites',
      subtitle: 'Expansive interiors with bespoke woodwork, king beds, and ambient lounging.',
      pageTarget: 'rooms',
      ctaText: 'Explore Rooms & Suites',
    },
    {
      id: 'slide-2',
      src: '/dinning/IMG_6097.jpeg',
      alt: 'Multi-Cuisine Fine Dining Restaurant',
      tag: 'Gourmet Dining',
      category: 'Culinary Delights',
      title: 'Multi-Cuisine Restaurant',
      subtitle: 'Savor gourmet Indian, Chinese, and Continental flavors crafted fresh daily.',
      pageTarget: 'restaurants',
      ctaText: 'Discover Dining Menu',
    },
    {
      id: 'slide-3',
      src: '/rooms_image/IMG_6048.jpeg',
      alt: 'Jashn Grand Banquet Hall',
      tag: 'Celebrations',
      category: 'Banquets & Weddings',
      title: 'Jashn Hall (300+ Pax)',
      subtitle: 'Celebration-ready banquet spaces designed for memorable weddings, galas, and events.',
      pageTarget: 'banquets',
      ctaText: 'Explore Banquet Venues',
    },
    {
      id: 'slide-4',
      src: '/rooms_image/IMG_6046.jpeg',
      alt: 'Deluxe Guest Room',
      tag: 'Refined Comfort',
      category: 'Accommodations',
      title: 'Deluxe & Club Rooms',
      subtitle: 'Boutique elegance with smart TV, comfortable work station, and premium hospitality.',
      pageTarget: 'rooms',
      ctaText: 'View Room Options',
    },
    {
      id: 'slide-5',
      src: '/dinning/IMG_6106.jpeg',
      alt: 'Warm Ambient Dining Hall',
      tag: 'Hospitality',
      category: 'Social & Dining',
      title: 'Spacious Dining Hall',
      subtitle: 'Inviting, comfortable seating perfect for family gatherings and corporate dinners.',
      pageTarget: 'restaurants',
      ctaText: 'Reserve A Table',
    },
    {
      id: 'slide-6',
      src: '/rooms_image/IMG_6050.jpeg',
      alt: 'Royal Darbar Banquet',
      tag: 'Grand Moments',
      category: 'Events & Receptions',
      title: 'Royal Darbar Grand Hall',
      subtitle: 'Chandelier-lit luxury venue tailored for mid-to-large receptions and milestone events.',
      pageTarget: 'banquets',
      ctaText: 'Plan Your Occasion',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  const features = [
    {
      icon: MapPin,
      title: 'Prime Location on NH-19',
      description: 'Situated in Manjurahi, with easy connectivity.',
    },
    {
      icon: ShoppingBag,
      title: 'Only 3 km from Market',
      description: 'Close to shopping and business areas in Aurangabad.',
    },
    {
      icon: Bed,
      title: 'Comfortable Rooms',
      description: 'Multiple room categories to suit different guest needs.',
    },
    {
      icon: PartyPopper,
      title: 'Spacious Banquet Halls',
      description: 'Ideal for weddings, parties, and events.',
    },
    {
      icon: Utensils,
      title: 'Multi-Cuisine Restaurant',
      description: 'Serves Indian, Chinese, and Continental cuisine.',
    },
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Available for in-house guests and private events.',
    },
    {
      icon: Car,
      title: 'Free Parking',
      description: 'Convenient parking facility for guests.',
    },
    {
      icon: Bell,
      title: '24×7 Front Desk',
      description: 'Professional assistance for guests.',
    },
    {
      icon: ShieldCheck,
      title: 'CCTV Security',
      description: 'Added security for guests and property.',
    },
    {
      icon: Zap,
      title: 'Power Backup',
      description: 'Ensures uninterrupted hotel services.',
    },
    {
      icon: ArrowUpDown,
      title: 'Lift Facility',
      description: 'Convenient access to different floors.',
    },
    {
      icon: Users,
      title: 'Professional Hospitality',
      description: 'Comfortable stay with attentive service.',
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
      {/* Full-Page Cinematic Hero Slideshow */}
      <section
        className="relative w-full min-h-[88vh] lg:min-h-[94vh] flex flex-col justify-between overflow-hidden select-none bg-slate-950"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Full-width Background Slides */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isActive
                    ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-7000 ease-out"
                />

                {/* Cinematic Multi-layered Vignettes & Gradients */}
                {/* Dark gradient on the left/center to make text ultra-crisp */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30"></div>
                {/* Top vignette */}
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/85 via-black/40 to-transparent"></div>
                {/* Bottom vignette */}
                <div className="absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-[#07060A] via-[#07060A]/85 to-transparent"></div>
                {/* Radial ambient glow */}
                <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_25%_40%,rgba(197,160,77,0.15),transparent_60%)]"></div>
              </div>
            );
          })}
        </div>

        {/* Main Hero Content Overlaid (Top & Center) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 pb-8 flex-1 flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Hotel Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-brand-gold/40 text-brand-gold backdrop-blur-md text-xs sm:text-sm font-medium tracking-wider uppercase mb-5 animate-fade-in-up shadow-lg">
              <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
              <span>Luxury Hospitality · NH-19, Aurangabad</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] text-white tracking-tight animate-fade-in-up drop-shadow-md">
              A stay that feels
              <span className="block text-transparent bg-clip-text bg-[linear-gradient(90deg,#F3E3B2,#C5A04D,#F3E3B2)]">
                quietly iconic.
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 text-slate-200/90 text-base sm:text-xl md:text-2xl max-w-2xl leading-relaxed drop-shadow animate-fade-in-up">
              Spacious rooms, skyline views, refined dining, and celebration-ready banquets. Make your days special with us.
            </p>
          </div>
        </div>

        {/* Bottom Interactive Bar (Thumbnails & Micro-info across full width) */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8">
          {/* Sleek Minimal Slide Indicators (No Photo Boxes) */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <button
                    key={`indicator-${slide.id}`}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                      isActive
                        ? 'w-10 bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_12px_rgba(245,158,11,0.7)]'
                        : 'w-3 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>
            <div className="text-xs font-medium text-slate-400 select-none">
              <span className="text-white font-bold">{currentSlide + 1}</span> / {slides.length}
            </div>
          </div>

          {/* Micro Info Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-3 sm:p-4">
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60">Location</p>
              <p className="mt-1 text-xs sm:text-sm text-white font-semibold inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-gold shrink-0" />
                <span className="truncate">Prime NH-19 Access</span>
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-3 sm:p-4">
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60">Signature</p>
              <p className="mt-1 text-xs sm:text-sm text-white font-semibold inline-flex items-center gap-2">
                <Waves className="h-4 w-4 text-brand-gold shrink-0" />
                <span className="truncate">Rooftop Pool & Deck</span>
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-3 sm:p-4">
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60">Events</p>
              <p className="mt-1 text-xs sm:text-sm text-white font-semibold inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-brand-gold shrink-0" />
                <span className="truncate">Banquets & Weddings</span>
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-3 sm:p-4">
              <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/60">Cuisine</p>
              <p className="mt-1 text-xs sm:text-sm text-white font-semibold inline-flex items-center gap-2">
                <Utensils className="h-4 w-4 text-brand-gold shrink-0" />
                <span className="truncate">Multi-Cuisine Dining</span>
              </p>
            </div>
          </div>
        </div>

        {/* Full-width auto-play countdown progress bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-white/15 z-30 overflow-hidden">
          <div
            key={currentSlide}
            className="h-full bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold animate-progress"
            style={{
              animationPlayState: isPlaying ? 'running' : 'paused',
            }}
          />
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
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              The perfect blend of comfort, luxury, and exceptional service for every guest
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
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center cursor-pointer shadow-lg hover:shadow-amber-600/40"
            >
              Book Now
            </button>
            <button 
              onClick={() => _props.onNavigate ? _props.onNavigate('about') : undefined}
              className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Room Booking Modal */}
      <RoomBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialRoomName="Deluxe Room"
      />
    </div>
  );
}
