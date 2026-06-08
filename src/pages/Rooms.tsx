import { Star, Users, Maximize2, Wifi } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      name: 'Standard Room',
      price: '₹3,500',
      capacity: '2 Guests',
      area: '350 sq ft',
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['King Bed', 'AC', 'WiFi', 'Shower'],
      description: 'Comfortable and well-appointed rooms perfect for business travelers and short stays.',
      rating: 4.5,
    },
    {
      name: 'Deluxe Room',
      price: '₹5,000',
      capacity: '2-3 Guests',
      area: '500 sq ft',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['King Bed', 'Sofa', 'AC', 'WiFi', 'TV', 'Bathroom'],
      description: 'Spacious rooms with premium furnishings and modern amenities for an elevated stay.',
      rating: 4.7,
    },
    {
      name: 'Suite',
      price: '₹8,000',
      capacity: '2-4 Guests',
      area: '800 sq ft',
      image: 'https://images.pexels.com/photos/1579824/pexels-photo-1579824.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['King Bed', 'Living Room', 'Kitchenette', 'AC', 'WiFi', 'TV', 'Spa Tub'],
      description: 'Luxury suites with separate living areas, perfect for families and special occasions.',
      rating: 4.9,
    },
    {
      name: 'Presidential Suite',
      price: '₹12,000',
      capacity: '2-6 Guests',
      area: '1200 sq ft',
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Multiple Bedrooms', 'Lounge', 'Full Kitchen', 'Jacuzzi', 'WiFi', 'Concierge'],
      description: 'Ultimate luxury with exclusive amenities and personalized concierge service.',
      rating: 5.0,
    },
    {
      name: 'Business Room',
      price: '₹4,500',
      capacity: '1-2 Guests',
      area: '400 sq ft',
      image: 'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Queen Bed', 'Work Desk', 'High-Speed WiFi', 'Phone', 'Coffee Maker'],
      description: 'Designed for professionals with dedicated work space and business amenities.',
      rating: 4.6,
    },
    {
      name: 'Family Villa',
      price: '₹10,000',
      capacity: '4-6 Guests',
      area: '1000 sq ft',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Multiple Rooms', 'Lounge', 'Kitchenette', 'Games', 'WiFi', 'Separate Bath'],
      description: 'Spacious accommodations ideal for families with multiple bedrooms and living areas.',
      rating: 4.8,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Rooms & Suites</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover our collection of elegantly designed rooms, each offering a unique experience
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {room.price}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(room.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      ))}
                      <span className="text-white text-sm ml-2">{room.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{room.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{room.description}</p>

                  {/* Details */}
                  <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-slate-200">
                    <div className="text-center">
                      <Users className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                      <p className="text-xs text-slate-600">{room.capacity}</p>
                    </div>
                    <div className="text-center">
                      <Maximize2 className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                      <p className="text-xs text-slate-600">{room.area}</p>
                    </div>
                    <div className="text-center">
                      <Wifi className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                      <p className="text-xs text-slate-600">WiFi</p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.slice(0, 4).map((amenity, i) => (
                        <span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                          ✓ {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Features Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            What Makes Our Rooms Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: 'Premium Bedding', desc: 'Egyptian cotton sheets and memory foam pillows for ultimate comfort' },
                { title: 'Smart Technology', desc: 'Modern control systems for lighting, temperature, and entertainment' },
                { title: '24/7 Housekeeping', desc: 'Dedicated staff for your comfort and convenience' },
                { title: 'Room Service', desc: 'In-room dining available around the clock' },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1579824/pexels-photo-1579824.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Room features"
                className="rounded-xl shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">Best Price</h3>
              <p>Guaranteed lowest rates online</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Free Cancellation</h3>
              <p>Cancel up to 48 hours before arrival</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">24/7 Support</h3>
              <p>Round-the-clock customer assistance</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors">
              Reserve a Room
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
