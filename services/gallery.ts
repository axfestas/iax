import { GalleryItem } from '@/types';

const galleryItems: GalleryItem[] = [
  { id: 'gal-001', title: 'Mesa Mario', image: '/images/gallery/mario-table.png', category: 'Tema', themeId: 'mario' },
  { id: 'gal-002', title: 'Painel Azul', image: '/images/gallery/blue-panel.png', category: 'Painel' }
];

export class GalleryService {
  getGalleryItems(): GalleryItem[] {
    return galleryItems;
  }
}

export const galleryService = new GalleryService();
