import { MarketCatalog } from '@/types';

export class MarketService {
  getMarketCatalogs(): MarketCatalog[] {
    return [
      {
        marketplace: 'Mercado Livre',
        products: [
          { id: 'ml-001', title: 'Painel em EVA 2m', marketplace: 'Mercado Livre', price: 410, currency: 'BRL', availability: 'in-stock', supplierId: 'forn2' },
          { id: 'ml-002', title: 'Balões vermelhos 30un', marketplace: 'Mercado Livre', price: 95, currency: 'BRL', availability: 'in-stock', supplierId: 'forn1' }
        ]
      },
      {
        marketplace: 'Amazon',
        products: [
          { id: 'amz-001', title: 'Toalha temática Mario', marketplace: 'Amazon', price: 120, currency: 'BRL', availability: 'pre-order' }
        ]
      }
    ];
  }
}

export const marketService = new MarketService();
