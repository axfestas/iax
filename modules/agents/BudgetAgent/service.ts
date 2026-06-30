import { BudgetAgentRequest, BudgetAgentResponse } from './types';

export class BudgetAgentService {
  reviewBudget(request: BudgetAgentRequest): BudgetAgentResponse {
    const totalCost = request.costBreakdown.reduce((sum, item) => sum + item.cost, 0);
    const variance = request.budgetLimit - totalCost;

    return {
      variance,
      advice: variance >= 0 ? 'O orçamento está dentro do limite. Considere investir em atualizações de design se houver margem.' : 'O projeto está acima do orçamento. Reavalie custos de material e mão de obra.',
      costWarnings: request.costBreakdown.filter((item) => item.cost > request.budgetLimit * 0.2).map((item) => `Alto custo em ${item.category}: ${item.cost}`)
    };
  }
}

export const budgetAgentService = new BudgetAgentService();
