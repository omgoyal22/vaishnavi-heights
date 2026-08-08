import { Award, Users, Globe, Heart } from 'lucide-react';

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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Hotel Vaishnavi Heights
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A legacy of luxury, hospitality, and exceptional service spanning over two decades
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-white">
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
