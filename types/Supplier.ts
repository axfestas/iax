export interface Supplier {
  id: string;
  name: string;
  category: string;
  rating: number;
  region: string;
  contact?: string;
  tags?: string[];
}
