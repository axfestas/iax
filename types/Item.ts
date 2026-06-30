export interface Item {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unitPrice: number;
  supplierId?: string;
  status: 'available' | 'reserved' | 'out-of-stock';
}
