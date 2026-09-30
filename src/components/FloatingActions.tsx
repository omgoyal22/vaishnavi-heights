import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const phoneNumber = '+918581888883';
  const whatsappUrl = 'https://wa.me/918581888883?text=Hello%20Hotel%20Vaishnavi%20Heights%2C%20I%20would%20like%20to%20inquire%20about%20a%20booking';

  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-[0_8px_25px_rgba(217,119,6,0.45)] hover:shadow-[0_12px_30px_rgba(217,119,6,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        aria-label="Call Hotel Vaishnavi Heights"
      >
        <Phone className="w-6 h-6 animate-bounce sm:animate-none group-hover:rotate-12 transition-transform duration-300" />
        {/* Tooltip on Desktop */}
        <span className="hidden sm:inline-block pointer-events-none absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl border border-white/10 backdrop-blur-md">
          📞 Call +91 85818 88883
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        aria-label="Chat with Hotel Vaishnavi Heights on WhatsApp"
      >
        {/* Subtle pulsating halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366] group-hover:scale-110 transition-transform duration-300" />

        {/* Tooltip on Desktop */}
        <span className="hidden sm:inline-block pointer-events-none absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl border border-white/10 backdrop-blur-md">
          💬 Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
