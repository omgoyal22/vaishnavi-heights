export interface OfferBannerConfig {
  isEnabled: boolean;
  badge: string;
  headline: string;
  couponCode: string;
  buttonText: string;
  buttonLink: string;
  theme: 'gold' | 'maroon' | 'dark' | 'emerald';
}

export const defaultOfferBanner: OfferBannerConfig = {
  isEnabled: true,
  badge: '🎉 SPECIAL OFFER · 15% OFF',
  headline: 'Enjoy 15% OFF on all Room Bookings & Multi-Cuisine Dining this season!',
  couponCode: 'VAISHNAVI15',
  buttonText: 'Claim on WhatsApp',
  buttonLink: 'https://wa.me/918581888883?text=Hello%20Hotel%20Vaishnavi%20Heights%2C%20I%20would%20like%20to%20claim%20the%2015%25%20OFF%20Offer%20(Code%3A%20VAISHNAVI15)',
  theme: 'gold',
};

const STORAGE_KEY = 'vaishnavi_heights_offer_banner';

export function getOfferBanner(): OfferBannerConfig {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultOfferBanner, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Failed to load offer banner from localStorage:', error);
  }
  return defaultOfferBanner;
}

export function saveOfferBanner(config: OfferBannerConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    window.dispatchEvent(new Event('offer-updated'));
  } catch (error) {
    console.error('Failed to save offer banner to localStorage:', error);
  }
}
