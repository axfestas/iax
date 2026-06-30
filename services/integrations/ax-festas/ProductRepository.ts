import { MarketProduct } from '@/types';

export interface ProductRepository {
  fetchProducts(): Promise<MarketProduct[]>;
}

export class AxFestasProductRepository implements ProductRepository {
  async fetchProducts(): Promise<MarketProduct[]> {
    return [
      { id: 'prod-01', title: 'Balões metalizados', marketplace: 'AX Festas', price: 18.5, currency: 'BRL', supplierId: 'forn1', availability: 'in-stock' },
      { id: 'prod-02', title: 'Painel decorativo Mario', marketplace: 'AX Festas', price: 420, currency: 'BRL', supplierId: 'forn2', availability: 'in-stock' }
    ];
  }
}
