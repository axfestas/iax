import { Customer } from '@/types';

export class CustomersService {
  getCustomers(): Customer[] {
    return [
      { id: 'cust-001', name: 'Festas & Alegria', email: 'contato@festasealegria.com', phone: '+55 11 99999-0001', company: 'Festas & Alegria', preferences: ['infantil', 'temas lúdicos'] },
      { id: 'cust-002', name: 'Eventos Corporativos LTDA', email: 'vendas@eventoscorporativos.com', phone: '+55 41 99999-0002', company: 'Eventos Corporativos LTDA', preferences: ['corporativo', 'elegante'] }
    ];
  }
}

export const customersService = new CustomersService();
