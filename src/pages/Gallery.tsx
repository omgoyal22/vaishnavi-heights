import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { getGalleryImages, GalleryItem } from '../utils/galleryStore';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const load = () => setGalleryImages(getGalleryImages());
    load();
    window.addEventListener('gallery-updated', load);
    return () => window.removeEventListener('gallery-updated', load);
  }, []);

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
              { count: '7', label: 'Room Types' },
              { count: '3', label: 'Banquet Halls' },
              { count: '1', label: 'Multi-Cuisine Restaurant' },
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



      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-xl mb-8 text-amber-50">
            Every photo captures the commitment to luxury and excellence
          </p>
          <a href="https://wa.me/918581888883?text=Hello,%20I%20would%20like%20to%20book%20a%20visit" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors">
            Book Your Visit
          </a>
        </div>
      </section>
    </div>
  );
}
