import { TrendAgentRequest, TrendAgentResponse } from './types';

export class TrendAgentService {
  analyze(request: TrendAgentRequest): TrendAgentResponse {
    return {
      topThemes: ['Super Festa Mario', 'Floral Elegante'],
      topColors: ['Azul Royal', 'Vermelho Mario'],
      recommendation: `Os temas mais fortes nos últimos ${request.timeframe} são Super Festa Mario e Floral Elegante. Priorize essas opções para projetos infantis e corporativos.`
    };
  }
}

export const trendAgentService = new TrendAgentService();
