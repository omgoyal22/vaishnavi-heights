import { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, X, Check, Copy } from 'lucide-react';
import { getOfferBanner, OfferBannerConfig } from '../utils/offerStore';

export default function OfferBanner() {
  const [config, setConfig] = useState<OfferBannerConfig>(getOfferBanner());
  const [isDismissed, setIsDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleUpdate = () => {
      setConfig(getOfferBanner());
      setIsDismissed(false); // Re-show if admin updates it
    };
    window.addEventListener('offer-updated', handleUpdate);
    return () => window.removeEventListener('offer-updated', handleUpdate);
  }, []);

  if (!config.isEnabled || isDismissed) {
    return null;
  }

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (config.couponCode) {
      navigator.clipboard.writeText(config.couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getThemeClasses = () => {
    switch (config.theme) {
      case 'maroon':
        return 'bg-gradient-to-r from-[#7F1D1D] via-[#B91C1C] to-[#7F1D1D] text-white border-b-2 border-rose-300/50 shadow-[0_4px_25px_rgba(185,28,28,0.45)]';
      case 'dark':
        return 'bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-100 border-b-2 border-amber-400/50 shadow-[0_4px_25px_rgba(251,191,36,0.3)]';
      case 'emerald':
        return 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 text-slate-950 border-b-2 border-emerald-200 shadow-[0_4px_25px_rgba(16,185,129,0.4)]';
      case 'gold':
      default:
        return 'bg-[linear-gradient(90deg,#FFFDE7_0%,#FEF08A_15%,#FBBF24_50%,#FEF08A_85%,#FFFDE7_100%)] text-slate-950 border-b-2 border-amber-300 shadow-[0_6px_30px_rgba(251,191,36,0.65)]';
    }
  };

  const isDarkTheme = config.theme === 'dark' || config.theme === 'maroon';

  return (
    <aside
      aria-label="Special Offers Banner"
      className={`relative z-40 px-3 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 overflow-hidden ${getThemeClasses()}`}
    >
      {/* Radiant Shining Light Sweep Animation */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-banner-shine absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 text-xs sm:text-sm">
        {/* Left: Badge + Headline */}
        <div className="flex flex-1 items-center gap-2 sm:gap-3.5 min-w-0">
          {config.badge && (
            <span
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-black uppercase tracking-wider text-[10px] sm:text-xs shadow-md transition-transform hover:scale-105 ${
                isDarkTheme
                  ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300/60 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                  : 'bg-slate-950 text-amber-300 ring-2 ring-amber-400/80 shadow-[0_0_15px_rgba(0,0,0,0.35)]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
              <span>{config.badge}</span>
            </span>
          )}

          <p className={`font-extrabold truncate tracking-tight text-xs sm:text-sm md:text-base ${
            isDarkTheme 
              ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' 
              : 'text-slate-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]'
          }`}>
            {config.headline}
          </p>
        </div>

        {/* Right: Coupon Code + CTA Button + Close */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
          {config.couponCode && (
            <button
              onClick={handleCopyCode}
              title="Click to copy promo code"
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-black tracking-wider transition-all shadow-sm hover:scale-105 active:scale-95 ${
                isDarkTheme
                  ? 'bg-white/15 hover:bg-white/25 text-amber-300 border border-amber-300/40 shadow-[0_0_10px_rgba(251,191,36,0.25)]'
                  : 'bg-white/95 hover:bg-white text-slate-950 border border-slate-900/30 hover:border-slate-950 shadow'
              }`}
            >
              <span>{config.couponCode}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-80" />
              )}
            </button>
          )}

          {config.buttonText && config.buttonLink && (
            <a
              href={config.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-xl font-black text-xs tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 ${
                isDarkTheme
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(251,191,36,0.6)]'
                  : 'bg-slate-950 text-amber-300 hover:bg-black hover:text-amber-200 border border-amber-400/70 shadow-[0_4px_18px_rgba(0,0,0,0.4)]'
              }`}
            >
              <MessageCircle className="w-4 h-4 fill-amber-300 text-slate-950" />
              <span>{config.buttonText}</span>
            </a>
          )}

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss offer banner"
            className={`p-1.5 rounded-full transition-all ${
              isDarkTheme
                ? 'text-white/70 hover:text-white hover:bg-white/20'
                : 'text-slate-950/70 hover:text-slate-950 hover:bg-black/15'
            }`}
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </aside>
  );
}
