import { useState, useEffect, useRef } from 'react';
import {
  Upload,
  Trash2,
  ArrowLeft,
  Image as ImageIcon,
  Plus,
  Check,
  AlertCircle,
  Tag,
  Sparkles,
  Save,
  RotateCcw,
  Eye,
  MessageCircle,
  Megaphone
} from 'lucide-react';
import { getGalleryImages, addGalleryImage, deleteGalleryImage, GalleryItem } from '../utils/galleryStore';
import { getOfferBanner, saveOfferBanner, defaultOfferBanner, OfferBannerConfig } from '../utils/offerStore';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'offers'>('gallery');

  // Gallery state
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Hotel');
  const [customCategory, setCustomCategory] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Offer Banner state
  const [offerForm, setOfferForm] = useState<OfferBannerConfig>(getOfferBanner());
  const [offerSavedSuccess, setOfferSavedSuccess] = useState(false);

  const defaultCategories = ['Hotel', 'Rooms', 'Dining', 'Banquets', 'Amenities', 'Other / Custom'];

  const loadImages = () => {
    setImages(getGalleryImages());
  };

  useEffect(() => {
    loadImages();
    setOfferForm(getOfferBanner());

    const handleGalleryUpdate = () => loadImages();
    const handleOfferUpdate = () => setOfferForm(getOfferBanner());

    window.addEventListener('gallery-updated', handleGalleryUpdate);
    window.addEventListener('offer-updated', handleOfferUpdate);

    return () => {
      window.removeEventListener('gallery-updated', handleGalleryUpdate);
      window.removeEventListener('offer-updated', handleOfferUpdate);
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const compressAndConvertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height);
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
          resolve(dataUrl);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile || !title.trim()) return;

    setIsUploading(true);
    setUploadSuccess(false);

    try {
      const base64Image = await compressAndConvertToBase64(imageFile);
      const finalCategory = category === 'Other / Custom' ? (customCategory.trim() || 'General') : category;

      addGalleryImage({
        title: title.trim(),
        category: finalCategory,
        image: base64Image,
      });

      setTitle('');
      setImageFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Failed to process image upload.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id: string, imgTitle: string) => {
    if (window.confirm(`Are you sure you want to delete "${imgTitle}" from the gallery?`)) {
      deleteGalleryImage(id);
    }
  };

  // Offer form save
  const handleSaveOffer = (e: React.FormEvent) => {
    e.preventDefault();
    saveOfferBanner(offerForm);
    setOfferSavedSuccess(true);
    setTimeout(() => setOfferSavedSuccess(false), 3500);
  };

  const handleResetOffer = () => {
    if (window.confirm('Reset offer banner to default 15% discount settings?')) {
      setOfferForm(defaultOfferBanner);
      saveOfferBanner(defaultOfferBanner);
      setOfferSavedSuccess(true);
      setTimeout(() => setOfferSavedSuccess(false), 3000);
    }
  };

  const handleApplyPreset = (preset: Partial<OfferBannerConfig>) => {
    setOfferForm((prev) => ({ ...prev, ...preset }));
  };

  const categories = ['All', ...new Set(images.map((img) => img.category))];
  const filteredImages = selectedFilter === 'All'
    ? images
    : images.filter((img) => img.category === selectedFilter);

  const navigateToSite = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-amber-500 to-orange-500 p-2 rounded-xl shadow-lg shadow-amber-500/20">
              <Megaphone className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Hotel Vaishnavi Admin Portal
              </h1>
              <p className="text-xs text-slate-400">Manage Live Website Content & Offers</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Tabs */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'gallery'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Gallery Photos</span>
              </button>

              <button
                onClick={() => setActiveTab('offers')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'offers'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Tag className="w-4 h-4" />
                <span>Offer Banner</span>
                {offerForm.isEnabled && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                )}
              </button>
            </div>

            <button
              onClick={navigateToSite}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Site</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {activeTab === 'offers' ? (
        /* OFFERS & ANNOUNCEMENT BANNER TAB */
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8 animate-fade-in">
          {/* Header Banner info */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Website Header Promotion</span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Top Offer & Discount Banner
                </h2>
                <p className="text-sm text-slate-400 mt-1 max-w-xl">
                  Edit the promotional announcement banner that displays on every page header. Guests can see your 15% discount, coupon code, and click to book on WhatsApp.
                </p>
              </div>

              {/* Status Switch */}
              <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800 shrink-0">
                <span className="text-xs font-semibold text-slate-300">Banner Display:</span>
                <button
                  type="button"
                  onClick={() =>
                    setOfferForm((prev) => ({ ...prev, isEnabled: !prev.isEnabled }))
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    offerForm.isEnabled ? 'bg-emerald-500' : 'bg-slate-800'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      offerForm.isEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span
                  className={`text-xs font-bold ${
                    offerForm.isEnabled ? 'text-emerald-400' : 'text-slate-500'
                  }`}
                >
                  {offerForm.isEnabled ? 'LIVE' : 'OFF'}
                </span>
              </div>
            </div>

            {/* Live Interactive Preview */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-amber-400" />
                <span>Live Website Preview</span>
              </p>

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Mock Browser Header */}
                <div className="bg-slate-900 px-4 py-2 flex items-center justify-between text-[11px] text-slate-400 border-b border-white/5">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-300 font-mono text-[10px] ml-2">hotelvaishnaviheights.com</span>
                  </span>
                  <span>Header Preview</span>
                </div>

                {/* The Offer Banner Rendered inside preview */}
                <div
                  className={`relative px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm overflow-hidden ${
                    offerForm.theme === 'maroon'
                      ? 'bg-gradient-to-r from-[#7F1D1D] via-[#B91C1C] to-[#7F1D1D] text-white border-b-2 border-rose-300/50'
                      : offerForm.theme === 'dark'
                      ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-100 border-b-2 border-amber-400/50'
                      : offerForm.theme === 'emerald'
                      ? 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 text-slate-950 border-b-2 border-emerald-200'
                      : 'bg-[linear-gradient(90deg,#FFFDE7_0%,#FEF08A_15%,#FBBF24_50%,#FEF08A_85%,#FFFDE7_100%)] text-slate-950 border-b-2 border-amber-300 shadow-[0_6px_30px_rgba(251,191,36,0.65)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950 text-amber-300 ring-2 ring-amber-400/80 shadow">
                      {offerForm.badge || 'PROMO'}
                    </span>
                    <span className="font-extrabold truncate text-slate-950">
                      {offerForm.headline || 'Your Offer Headline appears here...'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {offerForm.couponCode && (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-black bg-white/95 text-slate-950 border border-slate-900/30 shadow-sm">
                        Code: {offerForm.couponCode}
                      </span>
                    )}
                    {offerForm.buttonText && (
                      <span className="px-3 py-1.5 rounded-lg text-xs font-black bg-slate-950 text-amber-300 flex items-center gap-1 shadow-md border border-amber-400/60">
                        <MessageCircle className="w-3.5 h-3.5 fill-amber-300 text-slate-950" />
                        <span>{offerForm.buttonText}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Mock Navbar underneath */}
                <div className="bg-white text-slate-800 px-4 py-3 flex items-center justify-between opacity-80">
                  <span className="font-bold text-xs tracking-wider">HOTEL VAISHNAVI HEIGHTS</span>
                  <div className="flex gap-4 text-xs font-medium text-slate-600">
                    <span>Home</span>
                    <span>Rooms</span>
                    <span>Dining</span>
                    <span>Banquets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Presets */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Quick 1-Click Presets:</span>
              <button
                type="button"
                onClick={() =>
                  handleApplyPreset({
                    badge: '🎉 SPECIAL OFFER · 15% OFF',
                    headline: 'Enjoy 15% OFF on all Room Bookings & Multi-Cuisine Dining this season!',
                    couponCode: 'VAISHNAVI15',
                    buttonText: 'Claim on WhatsApp',
                    theme: 'gold',
                  })
                }
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-amber-300 border border-slate-700 transition"
              >
                15% Dining & Booking Offer
              </button>

              <button
                type="button"
                onClick={() =>
                  handleApplyPreset({
                    badge: '🔥 WEEKEND DEAL · 20% OFF',
                    headline: 'Exclusive Weekend Getaway: Flat 20% OFF on Presidential & Deluxe Suites!',
                    couponCode: 'WEEKEND20',
                    buttonText: 'Book Suite',
                    theme: 'maroon',
                  })
                }
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-rose-300 border border-slate-700 transition"
              >
                20% Weekend Suite Special
              </button>

              <button
                type="button"
                onClick={() =>
                  handleApplyPreset({
                    badge: '💍 BANQUET SPECIAL',
                    headline: 'Special Package for Wedding & Reception bookings in Jashn Hall (300+ Pax)!',
                    couponCode: 'JASHN2026',
                    buttonText: 'Enquire Banquets',
                    theme: 'emerald',
                  })
                }
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-emerald-300 border border-slate-700 transition"
              >
                Banquet & Wedding Offer
              </button>
            </div>
          </div>

          {/* Edit Form */}
          <form onSubmit={handleSaveOffer} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Tag className="w-5 h-5 text-amber-400" />
              <span>Customize Offer Details</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Offer Headline */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Offer Headline / Announcement Text *
                </label>
                <input
                  type="text"
                  required
                  value={offerForm.headline}
                  onChange={(e) => setOfferForm({ ...offerForm, headline: e.target.value })}
                  placeholder="e.g. Flat 15% OFF on all Dining & Room Bookings!"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  This text scrolls and displays continuously at the very top of all pages.
                </p>
              </div>

              {/* Badge Text */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Offer Badge / Tag *
                </label>
                <input
                  type="text"
                  required
                  value={offerForm.badge}
                  onChange={(e) => setOfferForm({ ...offerForm, badge: e.target.value })}
                  placeholder="e.g. 15% OFF SPECIAL"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Coupon Code */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Promo / Coupon Code (Optional)
                </label>
                <input
                  type="text"
                  value={offerForm.couponCode}
                  onChange={(e) => setOfferForm({ ...offerForm, couponCode: e.target.value.toUpperCase() })}
                  placeholder="e.g. VAISHNAVI15"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white font-mono placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Button Text */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Button Text *
                </label>
                <input
                  type="text"
                  required
                  value={offerForm.buttonText}
                  onChange={(e) => setOfferForm({ ...offerForm, buttonText: e.target.value })}
                  placeholder="e.g. Claim on WhatsApp"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Button Link */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Button Action / WhatsApp Link *
                </label>
                <input
                  type="text"
                  required
                  value={offerForm.buttonLink}
                  onChange={(e) => setOfferForm({ ...offerForm, buttonLink: e.target.value })}
                  placeholder="e.g. https://wa.me/918581888883"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Theme Selector */}
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Banner Color Theme
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'gold', label: 'Luxury Gold', bg: 'from-amber-600 to-amber-700', text: 'text-slate-950' },
                    { id: 'maroon', label: 'Royal Wine', bg: 'from-red-900 to-rose-950', text: 'text-white' },
                    { id: 'dark', label: 'Sleek Dark', bg: 'from-slate-900 to-black', text: 'text-amber-400' },
                    { id: 'emerald', label: 'Festive Emerald', bg: 'from-emerald-800 to-teal-900', text: 'text-white' },
                  ].map((themeOpt) => (
                    <button
                      key={themeOpt.id}
                      type="button"
                      onClick={() => setOfferForm({ ...offerForm, theme: themeOpt.id as any })}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        offerForm.theme === themeOpt.id
                          ? 'border-amber-400 ring-2 ring-amber-400/40 bg-slate-900'
                          : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-4 h-4 rounded-full bg-gradient-to-r ${themeOpt.bg}`}></span>
                        <span className="text-xs font-semibold text-slate-200">{themeOpt.label}</span>
                      </div>
                      {offerForm.theme === themeOpt.id && (
                        <Check className="w-4 h-4 text-amber-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Notification on save */}
            {offerSavedSuccess && (
              <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold animate-fade-in">
                <Check className="w-5 h-5 shrink-0" />
                <span>Offer banner updated successfully! The new offer is now live across all pages of the website.</span>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={handleResetOffer}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default 15% Offer</span>
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Save & Publish Live</span>
              </button>
            </div>
          </form>
        </main>
      ) : (
        /* PHOTO GALLERY MANAGEMENT TAB (Existing Functionality Preserved) */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
          {/* Left Column: Upload Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl sticky top-24">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-amber-400">
                <Plus className="w-5 h-5" />
                Upload New Photo
              </h2>

              <form onSubmit={handleUpload} className="space-y-4">
                {/* Title Input */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                    Photo Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Royal Banquet View"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                {/* Section/Category Dropdown */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                    Gallery Section *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    {defaultCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Custom Category Input */}
                {category === 'Other / Custom' && (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                      Custom Section Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      placeholder="e.g. Poolside"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                )}

                {/* File Picker */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                    Select Image *
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                      previewUrl
                        ? 'border-amber-500/50 bg-slate-950/50'
                        : 'border-slate-800 hover:border-slate-700 bg-slate-950/30'
                    }`}
                  >
                    {previewUrl ? (
                      <div className="space-y-3">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="max-h-40 mx-auto rounded-lg object-cover shadow-md"
                        />
                        <p className="text-xs text-amber-400 font-medium">Click to change photo</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="w-8 h-8 text-slate-500 mx-auto" />
                        <div className="text-sm text-slate-400">
                          <span className="text-amber-400 font-semibold">Click to upload</span> or drag and drop
                        </div>
                        <p className="text-xs text-slate-600">PNG, JPG, WEBP up to 10MB</p>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Success Notification */}
                {uploadSuccess && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <Check className="w-4 h-4 shrink-0" />
                    Successfully added photo to gallery!
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isUploading || !imageFile || !title.trim()}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all duration-200"
                >
                  {isUploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      Uploading & Compressing...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      Publish to Gallery
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Manage Images Grid */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
                <div>
                  <h2 className="text-lg font-semibold text-slate-100">Live Gallery Photos</h2>
                  <p className="text-xs text-slate-400">
                    Total {images.length} images currently live across website pages
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedFilter === cat
                          ? 'bg-amber-500 text-slate-950 shadow-sm font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid */}
              {filteredImages.length === 0 ? (
                <div className="py-16 text-center border-2 border-dashed border-slate-800 rounded-2xl p-8">
                  <AlertCircle className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm font-medium">No images found in this section</p>
                  <p className="text-slate-600 text-xs mt-1">Upload a photo using the form on the left</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {filteredImages.map((img) => (
                    <div
                      key={img.id}
                      className="group bg-slate-950 border border-slate-800/80 rounded-xl overflow-hidden shadow-md hover:border-slate-700 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative h-44 overflow-hidden bg-slate-900">
                        <img
                          src={img.image}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-semibold text-amber-400 border border-slate-800">
                          {img.category}
                        </div>
                      </div>

                      <div className="p-4 flex items-center justify-between gap-2 flex-1 bg-gradient-to-b from-slate-950 to-slate-900/50">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-sm text-slate-200 truncate group-hover:text-amber-400 transition-colors">
                            {img.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 font-mono mt-0.5">ID: {img.id.slice(-6)}</p>
                        </div>

                        <button
                          onClick={() => handleDelete(img.id, img.title)}
                          title="Delete Image"
                          className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white border border-rose-500/20 hover:border-rose-500 transition-all shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
