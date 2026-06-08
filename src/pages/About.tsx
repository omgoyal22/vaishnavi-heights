import { Award, Users, Globe, Heart } from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '2000', event: 'Founded with a vision of luxury' },
    { year: '2007', event: 'Expanded to 500 rooms and suites' },
    { year: '2015', event: 'Achieved ISO certification' },
    { year: '2023', event: 'Renovated with modern amenities' },
  ];

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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hotel exterior"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                Founded in 2000, Hotel Vaishnavi Heights began as a dream to create a sanctuary of luxury and comfort. What started as a boutique establishment has grown into a premier destination for discerning travelers and event organizers.
              </p>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                Over the past two decades, we've maintained our commitment to excellence while continuously innovating our facilities and services. Our guests aren't just visitors; they become part of our extended family.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Today, we stand as a beacon of hospitality, offering 500+ luxurious rooms, world-class amenities, and unforgettable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2"></div>
                  <div className="w-1/2 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
                      <div className="w-12 h-12 bg-amber-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className={`bg-white rounded-lg p-6 shadow-lg ml-6 ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                      <h3 className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</h3>
                      <p className="text-slate-600">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              <p className="text-5xl font-bold text-amber-400 mb-2">25+</p>
              <p className="text-lg text-slate-300">Years of Service</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-amber-400 mb-2">500+</p>
              <p className="text-lg text-slate-300">Luxury Rooms</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-amber-400 mb-2">5000+</p>
              <p className="text-lg text-slate-300">Happy Guests</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-amber-400 mb-2">100%</p>
              <p className="text-lg text-slate-300">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Kumar', role: 'Managing Director', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { name: 'Priya Sharma', role: 'Director of Operations', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { name: 'Vikram Patel', role: 'Head Chef', img: 'https://images.pexels.com/photos/1120478/pexels-photo-1120478.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Our Hospitality</h2>
          <p className="text-xl mb-8 text-amber-50">Join thousands of satisfied guests who have made Hotel Vaishnavi Heights their preferred destination</p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors">
            Book Your Stay Today
          </button>
        </div>
      </section>
    </div>
  );
}
