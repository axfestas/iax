export interface ShoppingAgentRequest {
  items: Array<{ name: string; requiredQuantity: number; estimatedCost: number }>;
  budget: number;
}

export interface ShoppingAgentResponse {
  prioritizedItems: Array<{ name: string; priority: 'high' | 'medium' | 'low'; recommendedQuantity: number }>;
  savingsOpportunities: string[];
}
