import { Customer } from '@/types';

export interface CustomerRepository {
  fetchCustomers(): Promise<Customer[]>;
}

export class AxFestasCustomerRepository implements CustomerRepository {
  async fetchCustomers(): Promise<Customer[]> {
    return [
      { id: 'cust-01', name: 'Família Silva', email: 'silva@mail.com', phone: '+55 11 99999-0000', company: 'Buffet Alegria' },
      { id: 'cust-02', name: 'Empresa XYZ', email: 'contato@xyz.com.br', phone: '+55 41 98888-1111', company: 'Eventos XYZ' }
    ];
  }
}
