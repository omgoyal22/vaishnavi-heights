import { useState, useEffect, useRef } from 'react';
import { Upload, Trash2, ArrowLeft, Image as ImageIcon, Plus, Check, AlertCircle } from 'lucide-react';
import { getGalleryImages, addGalleryImage, deleteGalleryImage, GalleryItem } from '../utils/galleryStore';

export default function Admin() {
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

  const defaultCategories = ['Hotel', 'Rooms', 'Dining', 'Banquets', 'Amenities', 'Other / Custom'];

  const loadImages = () => {
    setImages(getGalleryImages());
  };

  useEffect(() => {
    loadImages();
    window.addEventListener('gallery-updated', loadImages);
    return () => window.removeEventListener('gallery-updated', loadImages);
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

          // Export as JPEG with 0.8 quality to keep localStorage payload light
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

      // Reset form
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
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-amber-500 to-orange-500 p-2 rounded-xl shadow-lg shadow-amber-500/20">
              <ImageIcon className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Gallery Admin Portal
              </h1>
              <p className="text-xs text-slate-400">Vaishnavi Heights Management</p>
            </div>
          </div>

          <button
            onClick={navigateToSite}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium border border-slate-700 transition-all duration-200 hover:shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
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
    </div>
  );
}
