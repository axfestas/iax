import { InventoryReport } from '@/types';
import { axFestasService } from '@/services/axFestasService';

export class InventoryService {
  async getInventoryReport(): Promise<InventoryReport> {
    return axFestasService.inventoryRepository.fetchInventoryReport();
  }
}

export const inventoryService = new InventoryService();
