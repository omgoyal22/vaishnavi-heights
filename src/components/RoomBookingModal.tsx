import { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Users, Phone, Bed, MessageCircle, Check, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface RoomBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomName?: string;
}

export default function RoomBookingModal({ isOpen, onClose, initialRoomName = 'Deluxe Room' }: RoomBookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: initialRoomName,
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    roomsCount: '1 Room',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialRoomName) {
      setFormData((prev) => ({ ...prev, roomType: initialRoomName }));
    }
  }, [initialRoomName]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_t145bv8',
        'template_5b20eey',
        {
          from_name: formData.name,
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          subject: `Room Reservation Request: ${formData.roomType} (${formData.checkIn} to ${formData.checkOut})`,
          message: `Room Type: ${formData.roomType}\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}\nGuests: ${formData.guests}\nRooms: ${formData.roomsCount}\nSpecial Requests: ${formData.specialRequests || 'None'}`,
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
      `Hello Hotel Vaishnavi Heights, I have submitted a room reservation request:\n` +
      `• Name: ${formData.name}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Room: ${formData.roomType}\n` +
      `• Check-in: ${formData.checkIn}\n` +
      `• Check-out: ${formData.checkOut}\n` +
      `• Guests: ${formData.guests} (${formData.roomsCount})`
    );
    window.open(`https://wa.me/918581888883?text=${text}`, '_blank');
  };

  const todayStr = new Date().toISOString().split('T')[0];

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

            <h3 className="text-2xl font-bold text-white font-display">Booking Request Received!</h3>

            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-400">{formData.name}</strong>! We have received your booking request for{' '}
              <strong className="text-white">{formData.roomType}</strong> from <span className="text-amber-300">{formData.checkIn}</span> to{' '}
              <span className="text-amber-300">{formData.checkOut}</span>. Our front desk manager will contact you at{' '}
              <strong className="text-amber-400">{formData.phone}</strong> to confirm your reservation.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={sendToWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-[#25D366]" />
                <span>Confirm on WhatsApp</span>
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
                <Bed className="w-3.5 h-3.5" />
                <span>Hotel Reservation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">Book Your Stay</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Fill in your travel dates and contact details to reserve your room at Hotel Vaishnavi Heights.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Guest Name *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aryan Sharma"
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

              {/* Room Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Room Category *
                </label>
                <div className="relative">
                  <Bed className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Superior Room">Superior Room (Economy)</option>
                    <option value="Deluxe Room">Deluxe Room (Popular)</option>
                    <option value="Club Room">Club Room (Premium)</option>
                    <option value="Executive Room">Executive Room (Business)</option>
                    <option value="Business Suite">Business Suite (Executive)</option>
                    <option value="Luxury Suite">Luxury Suite (Luxury)</option>
                    <option value="Presidential Suite">Presidential Suite (Elite)</option>
                  </select>
                </div>
              </div>

              {/* Check-in & Check-out */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Check-in Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      required
                      type="date"
                      name="checkIn"
                      min={todayStr}
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Check-out Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                    <input
                      required
                      type="date"
                      name="checkOut"
                      min={formData.checkIn || todayStr}
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Guests & Rooms count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-500 absolute left-3 top-3 pointer-events-none" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3 Guests">3 Guests</option>
                      <option value="4+ Family">4+ Family</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Number of Rooms
                  </label>
                  <select
                    name="roomsCount"
                    value={formData.roomsCount}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="1 Room">1 Room</option>
                    <option value="2 Rooms">2 Rooms</option>
                    <option value="3 Rooms">3 Rooms</option>
                    <option value="4+ Rooms (Group)">4+ Rooms (Group)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  rows={2}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="e.g. Late check-in, extra bed, quiet room, airport pickup..."
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
                    Submitting Booking Request...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Confirm Reservation Request
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
