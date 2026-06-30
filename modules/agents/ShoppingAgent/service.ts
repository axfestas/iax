import { ShoppingAgentRequest, ShoppingAgentResponse } from './types';

export class ShoppingAgentService {
  optimizeList(request: ShoppingAgentRequest): ShoppingAgentResponse {
    return {
      prioritizedItems: request.items.map((item) => ({
        name: item.name,
        priority: item.estimatedCost > 100 ? 'high' : 'medium',
        recommendedQuantity: item.requiredQuantity
      })),
      savingsOpportunities: ['Buscar desconto por volume com fornecedor local', 'Priorizar fornecedores com frete incluso']
    };
  }
}

export const shoppingAgentService = new ShoppingAgentService();
