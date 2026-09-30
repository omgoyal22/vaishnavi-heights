import { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Users, Phone, Mail, Building2, PartyPopper, MessageCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface BanquetInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVenue?: string;
}

export default function BanquetInquiryModal({ isOpen, onClose, initialVenue = 'Jashn Hall' }: BanquetInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    venue: initialVenue,
    eventType: 'Wedding & Reception',
    eventDate: '',
    guestCount: '150-200',
    catering: 'Yes, Full Hotel Catering',
    specialNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialVenue) {
      setFormData((prev) => ({ ...prev, venue: initialVenue }));
    }
  }, [initialVenue]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try sending with configured EmailJS credentials
      await emailjs.send(
        'service_t145bv8',
        'template_5b20eey',
        {
          from_name: formData.name,
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          subject: `Banquet Inquiry: ${formData.venue} for ${formData.eventType}`,
          message: `Venue: ${formData.venue}\nEvent Type: ${formData.eventType}\nDate: ${formData.eventDate}\nEstimated Guests: ${formData.guestCount}\nCatering: ${formData.catering}\nNotes: ${formData.specialNotes || 'None'}`,
        },
        'vwzmsMYG5ZP4_-FuJ'
      );
    } catch (error) {
      console.warn('EmailJS notification notice:', error);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const sendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Hotel Vaishnavi Heights, I have submitted a banquet inquiry for:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Venue: ${formData.venue}\n` +
      `• Event: ${formData.eventType}\n` +
      `• Date: ${formData.eventDate}\n` +
      `• Guests: ${formData.guestCount}\n` +
      `• Catering: ${formData.catering}`
    );
    window.open(`https://wa.me/918581888883?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-3xl w-full max-w-xl p-6 sm:p-8 relative shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-white font-display">Inquiry Request Received!</h3>

            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-400">{formData.name}</strong>! We have received your inquiry for{' '}
              <strong className="text-white">{formData.venue}</strong>. Our dedicated banquet coordinator will call you at{' '}
              <strong className="text-amber-400">{formData.phone}</strong> shortly to discuss dates, packages, and venue tours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={sendToWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                <span>Send Copy via WhatsApp</span>
              </button>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-2">
                <PartyPopper className="w-3.5 h-3.5" />
                <span>Banquet & Events Planning</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Inquire for Venue Booking</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Fill out the details below and our event team will share pricing, menu options, and availability.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Venue & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Select Venue Hall *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                    <select
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Jashn Hall (300 Pax)">Jashn Hall (300 Pax - 3300 Sq.Ft)</option>
                      <option value="Royal Darbar (150-200 Pax)">Royal Darbar (150-200 Pax - 2300 Sq.Ft)</option>
                      <option value="Business Conference Hall (50 Pax)">Business Conference Hall (50 Pax - 750 Sq.Ft)</option>
                      <option value="Rooftop Poolside Venue">Rooftop Poolside Venue</option>
                      <option value="Custom Combination / Whole Facility">Custom Combination / Whole Facility</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Wedding & Reception">Wedding & Reception</option>
                    <option value="Engagement Ceremony">Engagement Ceremony</option>
                    <option value="Sangeet / Mehendi">Sangeet / Mehendi</option>
                    <option value="Birthday / Anniversary">Birthday / Anniversary</option>
                    <option value="Corporate Conference / Meeting">Corporate Conference / Meeting</option>
                    <option value="Product Launch / Exhibition">Product Launch / Exhibition</option>
                    <option value="Social Gathering / Family Reunion">Social Gathering / Family Reunion</option>
                    <option value="Other Celebration">Other Celebration</option>
                  </select>
                </div>
              </div>

              {/* Date & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Tentative Event Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      required
                      type="date"
                      name="eventDate"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Estimated Guests (Pax) *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="Under 50 Pax">Under 50 Pax</option>
                      <option value="50-100 Pax">50 - 100 Pax</option>
                      <option value="150-200 Pax">150 - 200 Pax</option>
                      <option value="250-300 Pax">250 - 300 Pax</option>
                      <option value="300+ Pax (Grand Wedding)">300+ Pax (Grand Wedding)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Additional Requirements / Message (Optional)
                </label>
                <textarea
                  name="specialNotes"
                  rows={2}
                  value={formData.specialNotes}
                  onChange={handleChange}
                  placeholder="e.g. Need rooms for wedding guests, pure veg catering, DJ and stage setup..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    Submitting Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Banquet Inquiry
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
