import { ThemeAgentRequest, ThemeAgentResponse } from './types';

export class ThemeAgentService {
  recommendTheme(request: ThemeAgentRequest): ThemeAgentResponse {
    const recommendedTheme = request.preferences.includes('jogos') ? 'Super Festa Mario' : 'Floral Elegante';
    const palette = recommendedTheme === 'Super Festa Mario' ? 'Azul Royal' : 'Rosa Pastel';

    return {
      recommendedTheme,
      palette,
      highlights: ['Tema alinhado ao público infantil', 'Paleta de cores amigável', 'Estrutura modular para decoração'],
      rationale: `O tema ${recommendedTheme} foi selecionado para casar com o orçamento de R$ ${request.budget} e as preferências de ${request.preferences.join(', ')}.`
    };
  }
}

export const themeAgentService = new ThemeAgentService();
