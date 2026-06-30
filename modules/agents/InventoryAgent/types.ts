export interface InventoryAgentRequest {
  itemIds: string[];
}

export interface InventoryAgentResponse {
  restockNeeded: string[];
  stockSummary: { itemId: string; onHand: number; minRequired: number }[];
}
