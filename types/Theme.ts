export interface Theme {
  id: string;
  slug: string;
  name: string;
  description: string;
  category?: string;
  availableInventory?: number;
  products?: string[];
  images?: string[];
  status?: 'active' | 'inactive' | 'archived';
  palettes: string[];
  characters: string[];
  events: string[];
  suppliers: string[];
  occasions: string[];
  heroImage?: string;
  createdAt: string;
  updatedAt: string;
}
