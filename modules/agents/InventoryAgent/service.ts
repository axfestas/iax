import { InventoryAgentRequest, InventoryAgentResponse } from './types';

export class InventoryAgentService {
  evaluateStock(request: InventoryAgentRequest): InventoryAgentResponse {
    const summary = request.itemIds.map((itemId) => ({
      itemId,
      onHand: Math.floor(Math.random() * 50),
      minRequired: 20
    }));

    return {
      restockNeeded: summary.filter((item) => item.onHand < item.minRequired).map((item) => item.itemId),
      stockSummary: summary
    };
  }
}

export const inventoryAgentService = new InventoryAgentService();
