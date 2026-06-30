import { MarketAgentRequest, MarketAgentResponse } from './types';

export class MarketAgentService {
  compareOptions(request: MarketAgentRequest): MarketAgentResponse {
    const marketplace = request.marketplacePreference ?? 'Mercado Livre';
    return {
      recommendation: `Comprar ${request.item} no ${marketplace}`,
      marketplace,
      estimatedPrice: Math.min(request.budget, 420),
      commentary: `Escolhi ${marketplace} pela melhor relação preço/qualidade para ${request.item} dentro do orçamento de R$ ${request.budget}.`
    };
  }
}

export const marketAgentService = new MarketAgentService();
