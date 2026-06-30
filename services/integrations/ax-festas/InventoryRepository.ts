import { InventoryReport } from '@/types';

export interface InventoryRepository {
  fetchInventoryReport(): Promise<InventoryReport>;
}

export class AxFestasInventoryRepository implements InventoryRepository {
  async fetchInventoryReport(): Promise<InventoryReport> {
    return {
      totalItems: 3,
      available: 2,
      reserved: 1,
      outOfStock: 0,
      totalValue: 546.51,
      categories: {
        Painel: 1,
        Balões: 30,
        Tecidos: 5
      },
      items: [
        { id: 'painel-mario', name: 'Painel Mario Arco', category: 'Painel', quantity: 1, unitPrice: 420, status: 'available', supplierId: 'forn2' },
        { id: 'baloes-vermelhos', name: 'Balões vermelhos', category: 'Balões', quantity: 30, unitPrice: 3.17, status: 'available', supplierId: 'forn1' },
        { id: 'toalha-tematica', name: 'Toalha temática', category: 'Tecidos', quantity: 5, unitPrice: 24, status: 'reserved' }
      ]
    };
  }
}
