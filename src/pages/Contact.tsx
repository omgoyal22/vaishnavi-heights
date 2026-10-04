import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Send, MapIcon } from 'lucide-react';
import PageHeroSlideshow, { HeroSlide } from '../components/PageHeroSlideshow';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    subject: '',
    message: '',
    reservationDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceId = 'service_t145bv8';
  const templateId = 'template_5b20eey';
  const publicKey = 'vwzmsMYG5ZP4_-FuJ';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage('EmailJS is not configured yet. Please add your service, template, and public key settings.');
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          name: formData.name,
          from_email: formData.email,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          guests: formData.guests || 'Not specified',
          subject: formData.subject,
          reservation_details: formData.reservationDetails,
          reservationDetails: formData.reservationDetails,
          message: formData.message,
          additional_message: formData.message,
        },
        publicKey
      );

      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '',
        subject: '',
        message: '',
        reservationDetails: '',
      });
      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS error:', error);
      setErrorMessage('Something went wrong while sending your message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const contactHeroSlides: HeroSlide[] = [
    {
      id: 'contact-slide-1',
      src: '/images/exterior-night.png',
      alt: 'Hotel Vaishnavi Heights Entrance & Facade',
      title: 'Visit Our Landmark Location',
      subtitle: 'Conveniently located on NH-19, Manjurahi, Aurangabad, Bihar.',
    },
    {
      id: 'contact-slide-2',
      src: '/images/lobby.png',
      alt: '24/7 Front Desk & Reception',
      title: '24/7 Concierge & Front Desk',
      subtitle: 'Our dedicated team is ready round-the-clock to assist your bookings and inquiries.',
    },
    {
      id: 'contact-slide-3',
      src: '/rooms_image/IMG_6045.jpeg',
      alt: 'Room Reservations',
      title: 'Room Reservations & Support',
      subtitle: 'Direct assistance for individual, corporate, and family room bookings.',
    },
    {
      id: 'contact-slide-4',
      src: '/dinning/IMG_6097.jpeg',
      alt: 'Dining Inquiries',
      title: 'Dining & Table Bookings',
      subtitle: 'Connect with our restaurant team for table reservations and party catering.',
    },
  ];

  return (
    <div>
      {/* Full-Page Cinematic Hero Slideshow */}
      <PageHeroSlideshow
        slides={contactHeroSlides}
        badgeText="Reach Out · We're Here 24×7"
        titleMain="Connect with us for"
        titleHighlight="memorable experiences."
        description="We'd love to hear from you. Contact our team for room reservations, dining tables, event bookings, or any special requests."
        actions={
          <a
            href="#contact-cards"
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3.5 rounded-full font-bold hover:shadow-xl hover:shadow-amber-600/40 transition-all duration-300 hover:scale-105"
          >
            View Contact Details
          </a>
        }
      />

      {/* Contact Information Cards */}
      <section id="contact-cards" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-600">
              <Phone className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Phone</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Reception: +91 85818 88881</p>
              <p className="text-slate-600 text-xs leading-relaxed">Restaurant: +91 85818 88882</p>
              <p className="text-slate-600 text-xs leading-relaxed">Banquet: +91 85818 88884</p>
              <p className="text-slate-600 text-xs leading-relaxed">WhatsApp: +91 85818 88883</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-600">
              <Mail className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Email</h3>
              <p className="text-slate-600 text-xs leading-relaxed">info@hotelvaishnaviheights.com</p>
              <p className="text-slate-600 text-xs leading-relaxed">reservations@hotelvaishnaviheight.com</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-600">
              <MapPin className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Address</h3>
              <p className="text-slate-600 text-xs leading-relaxed">Manjurahi, NH-19</p>
              <p className="text-slate-600 text-xs leading-relaxed">Aurangabad, Bihar</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-600">
              <Clock className="w-6 h-6 text-amber-600 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1.5">Hours</h3>
              <p className="text-slate-600 text-xs leading-relaxed">24/7 Service</p>
              <p className="text-slate-600 text-xs leading-relaxed">Always Open</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="+91 85818 88881"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-slate-900 mb-2">
                      Number of People
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                      placeholder="e.g. 2"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Room Reservation</option>
                      <option value="banquet">Banquet Inquiry</option>
                      <option value="dining">Dining Reservation</option>
                      <option value="general">General Inquiry</option>
                      <option value="complaint">Feedback/Complaint</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="reservationDetails" className="block text-sm font-semibold text-slate-900 mb-2">
                    Reservation Details
                  </label>
                  <textarea
                    id="reservationDetails"
                    name="reservationDetails"
                    value={formData.reservationDetails}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                    placeholder="Please share your room booking preferences, dates, or any special requests..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-300 rounded-lg text-green-700 font-semibold text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-300 rounded-lg text-red-700 font-semibold text-center">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-xl h-96 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <MapIcon className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-600 font-semibold">Hotel Location Map</p>
                  <p className="text-slate-500 text-sm">Manjurahi, NH-19, Aurangabad, Bihar</p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Reservations</h3>
                  <p className="text-slate-600">Call us at +91 85818 88881 or email reservations@hotelvaishnaviheight.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Banquet Inquiries</h3>
                  <p className="text-slate-600">Email our events team or call extension 405 for event planning assistance</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Response Time</h3>
                  <p className="text-slate-600">We typically respond within 2 hours during business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is the check-in and check-out time?',
                a: 'Check-in is at 2:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request.',
              },
              {
                q: 'Do you offer free WiFi?',
                a: 'Yes, complimentary high-speed WiFi is available throughout the hotel for all guests.',
              },
              {
                q: 'Can I cancel my reservation?',
                a: 'Cancellations are free up to 48 hours before your scheduled arrival. Cancellations within 48 hours may incur charges.',
              },
              {
                q: 'Do you have parking facilities?',
                a: 'Yes, we provide complimentary parking for hotel guests. Valet service is also available.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-slate-200 hover:border-amber-300 transition-colors"
              >
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl text-amber-50">Our team is here to assist you 24/7</p>
        </div>
      </section>
    </div>
  );
}
