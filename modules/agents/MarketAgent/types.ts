export interface MarketAgentRequest {
  item: string;
  budget: number;
  marketplacePreference?: string;
}

export interface MarketAgentResponse {
  recommendation: string;
  marketplace: string;
  estimatedPrice: number;
  commentary: string;
}
