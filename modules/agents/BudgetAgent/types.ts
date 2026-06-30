export interface BudgetAgentRequest {
  projectEstimate: number;
  budgetLimit: number;
  costBreakdown: { category: string; cost: number }[];
}

export interface BudgetAgentResponse {
  variance: number;
  advice: string;
  costWarnings: string[];
}
