export interface AnalyticsSnapshot {
  themePerformance: Array<{ theme: string; score: number; orders: number }>;
  colorUsage: Array<{ color: string; count: number }>;
  itemRentals: Array<{ item: string; rented: number }>;
  finance: {
    investment: number;
    revenue: number;
    profit: number;
    roi: number;
  };
}
