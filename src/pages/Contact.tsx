import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MapIcon } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We'd love to hear from you. Contact us for reservations, events, or inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-amber-600">
              <Phone className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-600 text-sm">+1 (555) 123-4567</p>
              <p className="text-slate-600 text-sm">+1 (555) 987-6543</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-amber-600">
              <Mail className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600 text-sm">info@vaishnavi.com</p>
              <p className="text-slate-600 text-sm">reservations@vaishnavi.com</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-amber-600">
              <MapPin className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Address</h3>
              <p className="text-slate-600 text-sm">123 Heritage Lane</p>
              <p className="text-slate-600 text-sm">City, State 12345</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-amber-600">
              <Clock className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Hours</h3>
              <p className="text-slate-600 text-sm">24/7 Service</p>
              <p className="text-slate-600 text-sm">Always Open</p>
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

                <div className="grid grid-cols-2 gap-4">
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
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
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

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-300 rounded-lg text-green-700 font-semibold text-center">
                    Thank you! Your message has been sent successfully.
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
                  <p className="text-slate-500 text-sm">123 Heritage Lane, City, State 12345</p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Reservations</h3>
                  <p className="text-slate-600">Call us at +1 (555) 123-4567 or email reservations@vaishnavi.com</p>
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
          <p className="text-xl mb-8 text-amber-50">Our team is here to assist you 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors">
              Call Us Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-700 transition-all">
              Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
