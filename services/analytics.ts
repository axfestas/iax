import { AnalyticsSnapshot } from '@/types';

export class AnalyticsService {
  getDashboardSnapshot(): AnalyticsSnapshot {
    return {
      themePerformance: [
        { theme: 'Super Festa Mario', score: 94, orders: 18 },
        { theme: 'Floral Elegante', score: 82, orders: 12 }
      ],
      colorUsage: [
        { color: 'Azul Royal', count: 42 },
        { color: 'Vermelho Mario', count: 31 }
      ],
      itemRentals: [
        { item: 'Painel Mario Arco', rented: 8 },
        { item: 'Balões vermelhos', rented: 15 }
      ],
      finance: {
        investment: 4200,
        revenue: 12500,
        profit: 8300,
        roi: 198
      }
    };
  }
}

export const analyticsService = new AnalyticsService();
