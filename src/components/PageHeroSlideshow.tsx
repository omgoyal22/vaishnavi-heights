import { useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { Sparkles } from 'lucide-react';

export interface HeroSlide {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  tag?: string;
}

export interface PageHeroSlideshowProps {
  slides: HeroSlide[];
  badgeText: string;
  titleMain: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  minHeightClass?: string;
  actions?: ReactNode;
  autoPlayInterval?: number;
}

export default function PageHeroSlideshow({
  slides,
  badgeText,
  titleMain,
  titleHighlight,
  titleSuffix,
  description,
  minHeightClass = 'min-h-[82vh] lg:min-h-[88vh]',
  actions,
  autoPlayInterval = 3500,
}: PageHeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    if (!slides || slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides]);

  const prevSlide = useCallback(() => {
    if (!slides || slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!slides || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

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

  if (!slides || slides.length === 0) return null;

  return (
    <section
      className={`relative w-full ${minHeightClass} flex flex-col justify-between overflow-hidden select-none bg-slate-950`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Image Slideshow"
    >
      {/* Full-width Background Crossfade Slides */}
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

              {/* Multi-layered Cinematic Vignettes */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/35"></div>
              <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-[#07060A] via-[#07060A]/85 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_25%_40%,rgba(197,160,77,0.15),transparent_60%)]"></div>
            </div>
          );
        })}
      </div>

      {/* Main Content Overlay (Center) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-brand-gold/40 text-brand-gold backdrop-blur-md text-xs sm:text-sm font-medium tracking-wider uppercase mb-5 animate-fade-in-up shadow-lg">
            <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
            <span>{badgeText}</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.02] text-white tracking-tight animate-fade-in-up drop-shadow-md">
            {titleMain}{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F3E3B2,#C5A04D,#F3E3B2)]">
              {titleHighlight}
            </span>
            {titleSuffix && ` ${titleSuffix}`}
          </h1>

          {/* Description */}
          <p className="mt-5 text-slate-200/90 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow animate-fade-in-up">
            {description}
          </p>

          {/* Optional Action Buttons */}
          {actions && (
            <div className="mt-7 flex flex-wrap gap-4 items-center animate-fade-in-up">
              {actions}
            </div>
          )}
        </div>
      </div>

      {/* Sleek Minimal Slide Indicators (No Photo Boxes) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8 flex items-center justify-between">
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
    </section>
  );
}
