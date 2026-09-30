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
        return 'bg-gradient-to-r from-[#5B1E1E] via-[#7D3C3C] to-[#5B1E1E] text-white border-b border-amber-500/20';
      case 'dark':
        return 'bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-100 border-b border-amber-500/30';
      case 'emerald':
        return 'bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 text-white border-b border-emerald-500/20';
      case 'gold':
      default:
        return 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-slate-950 border-b border-amber-400/30';
    }
  };

  const isDarkTheme = config.theme === 'dark' || config.theme === 'maroon' || config.theme === 'emerald';

  return (
    <aside
      aria-label="Special Offers Banner"
      className={`relative z-40 px-3 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 shadow-md ${getThemeClasses()}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
        {/* Left: Badge + Headline */}
        <div className="flex flex-1 items-center gap-2 sm:gap-3 min-w-0">
          {config.badge && (
            <span
              className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px] sm:text-xs shadow-sm ${
                isDarkTheme
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'bg-slate-950/20 text-slate-950 border border-slate-950/20'
              }`}
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span>{config.badge}</span>
            </span>
          )}

          <p className={`font-medium truncate ${isDarkTheme ? 'text-slate-100' : 'text-slate-950 font-semibold'}`}>
            {config.headline}
          </p>
        </div>

        {/* Right: Coupon Code + CTA Button + Close */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
          {config.couponCode && (
            <button
              onClick={handleCopyCode}
              title="Click to copy promo code"
              className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-bold tracking-wide transition-all ${
                isDarkTheme
                  ? 'bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-400/30'
                  : 'bg-slate-950/15 hover:bg-slate-950/25 text-slate-950 border border-slate-950/20'
              }`}
            >
              <span>{config.couponCode}</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-70" />
              )}
            </button>
          )}

          {config.buttonText && config.buttonLink && (
            <a
              href={config.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-lg font-bold text-xs shadow-sm transition-all hover:scale-105 active:scale-95 ${
                isDarkTheme
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:brightness-110'
                  : 'bg-slate-950 text-amber-400 hover:bg-slate-900'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{config.buttonText}</span>
            </a>
          )}

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss offer banner"
            className={`p-1 rounded-full transition-colors ${
              isDarkTheme ? 'text-white/60 hover:text-white hover:bg-white/10' : 'text-slate-900/60 hover:text-slate-900 hover:bg-black/10'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
