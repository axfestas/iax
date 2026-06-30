import { ThemeIntelligence } from '@/types/ThemeIntelligence';

const intelligenceProfiles: ThemeIntelligence[] = [
  {
    themeId: 'mario',
    aiDescription: 'Tema infantil colorido inspirado no universo Mario, ideal para eventos com crianças e famílias.',
    colorPalette: ['Azul Royal', 'Vermelho Mario', 'Amarelo Vibrante'],
    decorationStyles: ['Retro gamer', 'Painéis temáticos', 'Luzes quentes'],
    suggestedPanels: ['Painel Mario Arco', 'Painel de blocos'],
    suggestedCylinders: ['Cilindro com estampas de moedas', 'Cilindro de luz LED'],
    suggestedTables: ['Mesa principal com painel de ranking', 'Mesa de doces temática'],
    balloonSuggestions: ['Balões metalizados', 'Balões estampados de personagem', 'Balões de gás hélio'],
    similarThemes: ['super-festa-plano', 'festa-game'],
    relatedThemes: ['mario-racing', 'floresta-encantada'],
    marketAnalysis: 'Preços para material de festa infantil estão estáveis; invista em peças personalizadas para diferenciar propostas.',
    pinterestInspirations: ['https://www.pinterest.com/pin/1234567890', 'https://www.pinterest.com/pin/0987654321'],
    generatedIdeas: ['Parede de fotos com blocos de efeito 3D', 'Copo de lembrancinha com orelhas do Mario'],
    shoppingRecommendations: ['Comprar painel principal antecipado', 'Reservar balões metalizados com fornecedor local'],
    planningNotes: 'Definir circuito de brincadeiras antes de solicitar montagem do painel principal.',
    aiObservations: 'O público infantil responde bem a contrastes fortes e ícones nostálgicos; use sinalização clara para fluxo de crianças.'
  }
];

export class ThemeIntelligenceService {
  getIntelligenceByThemeId(themeId: string): ThemeIntelligence | null {
    return intelligenceProfiles.find((profile) => profile.themeId === themeId) ?? null;
  }
}

export const themeIntelligenceService = new ThemeIntelligenceService();
