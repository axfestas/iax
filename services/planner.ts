import { knowledgeService } from '@/services/knowledge';
import { PlannerRequest, PlannerResult } from '@/types';

export class PlannerService {
  async createPlan(request: PlannerRequest): Promise<PlannerResult> {
    const theme = await knowledgeService.getThemeBySlug(request.themeSlug);
    const palette = theme?.palettes?.[0] ?? 'azul';

    const checklist = [
      { id: 'check-01', title: 'Definir conceito e paleta', status: 'pending' as const, dueInDays: 1 },
      { id: 'check-02', title: 'Confirmar fornecedores essenciais', status: 'pending' as const, dueInDays: 3 },
      { id: 'check-03', title: 'Montagem de decoração', status: 'pending' as const, dueInDays: 7 }
    ];

    const schedule = [
      { id: 'schedule-01', title: 'Reunião de briefing', timeline: 'Dia 1', details: 'Revisar tema, local, número de convidados e orçamento.' },
      { id: 'schedule-02', title: 'Definição de fornecedores', timeline: 'Dia 3', details: 'Selecionar fornecedores de balões, tecidos e painéis.' },
      { id: 'schedule-03', title: 'Montagem e entrega', timeline: 'Dia 7', details: 'Instalar decoração e revisar checklist final.' }
    ];

    const shoppingList = [
      { item: 'Painel Mario Arco', quantity: 1, estimatedCost: 420 },
      { item: 'Balões vermelhos', quantity: 30, estimatedCost: 95 },
      { item: 'Toalha temática', quantity: 5, estimatedCost: 120 }
    ];

    const recommendations = [
      { id: 'rec-01', title: 'Adicionar iluminação LED', description: 'Use iluminação quente para destacar o painel da mesa principal.', category: 'Ambiente' },
      { id: 'rec-02', title: 'Criar área de fotos', description: 'Monte um cenário interativo com caixas decoradas e acessórios de Mario.', category: 'Experiência' }
    ];

    const estimatedBudget = Math.min(request.budget, 1200);

    return {
      checklist,
      schedule,
      shoppingList,
      recommendations,
      estimatedBudget,
      selectedPalette: palette
    };
  }
}

export const plannerService = new PlannerService();
