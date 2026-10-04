import { Award, Users, Globe, Heart } from 'lucide-react';
import PageHeroSlideshow, { HeroSlide } from '../components/PageHeroSlideshow';

export default function About() {


  const values = [
    {
      icon: Heart,
      title: 'Guest First',
      description: 'We prioritize our guests comfort and satisfaction above all',
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Our dedicated staff ensures exceptional service every moment',
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'We maintain international quality and sustainability practices',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Continuously improving our facilities and services',
    },
  ];

  const aboutHeroSlides: HeroSlide[] = [
    {
      id: 'about-slide-1',
      src: '/images/about-us-chandelier.jpg',
      alt: 'Grand Chandelier & Architecture',
      title: 'Heritage & Elegance',
      subtitle: 'Two decades of hospitality excellence, timeless luxury, and guest-first commitment.',
    },
    {
      id: 'about-slide-2',
      src: '/images/lobby.png',
      alt: 'Welcoming Hotel Lobby',
      title: 'Signature Hospitality',
      subtitle: 'Where every guest is treated with warmth, attention to detail, and personalized care.',
    },
    {
      id: 'about-slide-3',
      src: '/rooms_image/IMG_6045.jpeg',
      alt: 'Luxury Suite & Lounge',
      title: 'Modern Comfort',
      subtitle: 'Crafted living spaces designed for relaxation, business travelers, and families alike.',
    },
    {
      id: 'about-slide-4',
      src: '/dinning/IMG_6097.jpeg',
      alt: 'Fine Dining Restaurant',
      title: 'Culinary Traditions',
      subtitle: 'Celebrating regional delicacies and global flavors prepared by master chefs.',
    },
    {
      id: 'about-slide-5',
      src: '/images/rooftop-pool.png',
      alt: 'Rooftop Pool',
      title: 'Leisure & Wellness',
      subtitle: 'Recharge and unwind in our skyline pool and serene lifestyle spaces.',
    },
  ];

  return (
    <div>
      {/* Full-Page Cinematic Hero Slideshow */}
      <PageHeroSlideshow
        slides={aboutHeroSlides}
        badgeText="Our Story & Philosophy · Hotel Vaishnavi Heights"
        titleMain="A legacy of luxury and"
        titleHighlight="heartfelt hospitality."
        description="A premier destination in Aurangabad, Bihar, delivering comfortable accommodation, a multi-cuisine restaurant, banquet halls, and unforgettable experiences."
        actions={
          <a
            href="#story-section"
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3.5 rounded-full font-bold hover:shadow-xl hover:shadow-amber-600/40 transition-all duration-300 hover:scale-105"
          >
            Discover Our Story
          </a>
        }
      />

      {/* About Us */}
      <section id="story-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/about-us-chandelier.jpg"
                alt="Hotel chandelier"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Us</h2>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                Hotel Vaishnavi Heights is a premium hotel in Aurangabad, Bihar, offering comfortable accommodation, a multi-cuisine restaurant, banquet halls, a swimming pool, and professional hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-amber-400 mb-2">10+</p>
              <p className="text-lg text-slate-300">Years of Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-amber-400 mb-2">5+</p>
              <p className="text-lg text-slate-300">Types of Luxury Rooms</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-amber-400 mb-2">500+</p>
              <p className="text-lg text-slate-300">Happy Guests</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-amber-400 mb-2">100%</p>
              <p className="text-lg text-slate-300">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
