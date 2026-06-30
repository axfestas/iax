export interface Budget {
  total: number;
  allocated: number;
  remaining: number;
  currency: string;
  categories: Record<string, number>;
}
