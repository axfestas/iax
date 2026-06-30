export interface Balloon {
  id: string;
  type: 'latex' | 'foil' | 'giant' | 'led';
  color: string;
  quantity: number;
  supplierId?: string;
}
