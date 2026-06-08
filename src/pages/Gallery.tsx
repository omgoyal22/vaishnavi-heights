import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      title: 'Grand Lobby',
      category: 'Hotel',
      image: 'https://images.pexels.com/photos/1579824/pexels-photo-1579824.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Luxury Suite',
      category: 'Rooms',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Fine Dining',
      category: 'Dining',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Grand Ballroom',
      category: 'Banquets',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Premium Room',
      category: 'Rooms',
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Elegant Setup',
      category: 'Banquets',
      image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Relaxation Zone',
      category: 'Amenities',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Meeting Hall',
      category: 'Banquets',
      image: 'https://images.pexels.com/photos/1854076/pexels-photo-1854076.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Outdoor Terrace',
      category: 'Hotel',
      image: 'https://images.pexels.com/photos/1579824/pexels-photo-1579824.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Wedding Hall',
      category: 'Banquets',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Spa Area',
      category: 'Amenities',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Restaurant',
      category: 'Dining',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const categories = ['All', ...new Set(galleryImages.map((img) => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Explore the beauty and elegance of Hotel Vaishnavi Heights
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                    : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-amber-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-amber-300 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
          >
            <X size={24} className="text-black" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery view"
            className="max-w-4xl max-h-[90vh] rounded-xl object-contain"
          />
        </div>
      )}

      {/* Image Statistics */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            What We Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { count: '12+', label: 'Room Types' },
              { count: '6+', label: 'Banquet Halls' },
              { count: '8+', label: 'Fine Dining Areas' },
              { count: '500+', label: 'Total Photos' },
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                <p className="text-4xl font-bold text-amber-600 mb-2">{stat.count}</p>
                <p className="text-slate-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Immersive Experience
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Our gallery showcases the finest aspects of Hotel Vaishnavi Heights. From luxurious guest rooms to spectacular event spaces, elegant dining areas, and world-class amenities, each image tells a story of excellence.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'High-resolution photography',
                  '360-degree virtual tours',
                  'Room-by-room exploration',
                  'Event space showcases',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-slate-700 font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                Start Virtual Tour
              </button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1579824/pexels-photo-1579824.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Virtual tour"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl mb-8 text-amber-50">
            Every photo captures the commitment to luxury and excellence
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors">
            Book Your Visit
          </button>
        </div>
      </section>
    </div>
  );
}
