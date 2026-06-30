import { Supplier } from '@/types';

export interface SupplierRepository {
  fetchSuppliers(): Promise<Supplier[]>;
}

export class AxFestasSupplierRepository implements SupplierRepository {
  async fetchSuppliers(): Promise<Supplier[]> {
    return [
      { id: 'forn1', name: 'Balões & Cia', category: 'Balões', rating: 4.8, region: 'São Paulo', contact: 'contato@baloescia.com' },
      { id: 'forn2', name: 'DecoraFesta', category: 'Decoração', rating: 4.6, region: 'Curitiba', contact: 'vendas@decorafesta.com' }
    ];
  }
}
