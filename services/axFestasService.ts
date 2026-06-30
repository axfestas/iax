import {
  AxFestasInventoryRepository,
  AxFestasThemeRepository,
  AxFestasProductRepository,
  AxFestasSupplierRepository,
  AxFestasCustomerRepository
} from '@/services/integrations/ax-festas';

export class AxFestasService {
  inventoryRepository = new AxFestasInventoryRepository();
  themeRepository = new AxFestasThemeRepository();
  productRepository = new AxFestasProductRepository();
  supplierRepository = new AxFestasSupplierRepository();
  customerRepository = new AxFestasCustomerRepository();
}

export const axFestasService = new AxFestasService();
