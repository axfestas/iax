export interface MarketProduct {
  id: string;
  title: string;
  marketplace: string;
  price: number;
  currency: string;
  supplierId?: string;
  availability: 'in-stock' | 'pre-order' | 'out-of-stock';
}
