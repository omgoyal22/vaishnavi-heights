export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const defaultGalleryImages: GalleryItem[] = [
  {
    id: 'def-1',
    title: 'Grand Lobby',
    category: 'Hotel',
    image: '/rooms_image/IMG_6045.jpeg',
  },
  {
    id: 'def-2',
    title: 'Luxury Suite',
    category: 'Rooms',
    image: '/rooms_image/IMG_6046.jpeg',
  },
  {
    id: 'def-3',
    title: 'Fine Dining',
    category: 'Dining',
    image: '/rooms_image/IMG_6047.jpeg',
  },
  {
    id: 'def-4',
    title: 'Grand Ballroom',
    category: 'Banquets',
    image: '/rooms_image/IMG_6048.jpeg',
  },
  {
    id: 'def-5',
    title: 'Premium Room',
    category: 'Rooms',
    image: '/rooms_image/IMG_6049.jpeg',
  },
  {
    id: 'def-6',
    title: 'Elegant Setup',
    category: 'Banquets',
    image: '/rooms_image/IMG_6050.jpeg',
  },
  {
    id: 'def-7',
    title: 'Relaxation Zone',
    category: 'Amenities',
    image: '/rooms_image/IMG_6051.jpeg',
  },
  {
    id: 'def-8',
    title: 'Meeting Hall',
    category: 'Banquets',
    image: '/rooms_image/IMG_6052.jpeg',
  },
  {
    id: 'def-9',
    title: 'Outdoor Terrace',
    category: 'Hotel',
    image: '/rooms_image/IMG_6053.jpeg',
  },
  {
    id: 'def-10',
    title: 'Wedding Hall',
    category: 'Banquets',
    image: '/rooms_image/IMG_6055.jpeg',
  },
  {
    id: 'def-11',
    title: 'Spa Area',
    category: 'Amenities',
    image: '/rooms_image/IMG_6056.jpeg',
  },
  {
    id: 'def-12',
    title: 'Restaurant',
    category: 'Dining',
    image: '/rooms_image/IMG_6057.jpeg',
  },
];

const STORAGE_KEY = 'vaishnavi_heights_gallery';

export function getGalleryImages(): GalleryItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load gallery images from localStorage:', error);
  }
  return defaultGalleryImages;
}

export function saveGalleryImages(images: GalleryItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    window.dispatchEvent(new Event('gallery-updated'));
  } catch (error) {
    console.error('Failed to save gallery images to localStorage:', error);
    alert('Could not save image. Storage limit might be exceeded.');
  }
}

export function addGalleryImage(item: Omit<GalleryItem, 'id'>): GalleryItem {
  const current = getGalleryImages();
  const newItem: GalleryItem = {
    ...item,
    id: 'img_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
  };
  saveGalleryImages([newItem, ...current]);
  return newItem;
}

export function deleteGalleryImage(id: string): void {
  const current = getGalleryImages();
  const updated = current.filter((img) => img.id !== id);
  saveGalleryImages(updated);
}
