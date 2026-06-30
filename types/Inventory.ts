import { Item } from './Item';

export interface InventoryReport {
  totalItems: number;
  available: number;
  reserved: number;
  outOfStock: number;
  totalValue: number;
  categories: Record<string, number>;
  items: Item[];
}
