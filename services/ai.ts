import { agentRegistry } from '@modules/agents';
import { knowledgeAgentService } from '@modules/agents/KnowledgeAgent/service';
import { themeAgentService } from '@modules/agents/ThemeAgent/service';
import { plannerAgentService } from '@modules/agents/PlannerAgent/service';
import { marketAgentService } from '@modules/agents/MarketAgent/service';
import { shoppingAgentService } from '@modules/agents/ShoppingAgent/service';
import { trendAgentService } from '@modules/agents/TrendAgent/service';
import { inventoryAgentService } from '@modules/agents/InventoryAgent/service';
import { budgetAgentService } from '@modules/agents/BudgetAgent/service';

export interface AiChatResponse {
  agentId: string;
  agentName: string;
  text: string;
  details?: unknown;
}

export class AiService {
  getAgents() {
    return agentRegistry;
  }

  getAgentById(agentId: string) {
    return agentRegistry.find((agent) => agent.id === agentId) ?? null;
  }

  routeMessage(message: string): AiChatResponse {
    const normalized = message.toLowerCase();

    if (/tema|paleta|cores|design|conceito|visual/.test(normalized)) {
      const response = themeAgentService.recommendTheme({
        occasion: 'aniversário',
        preferences: ['cores vibrantes', 'personagens infantis'],
        budget: 4200,
        guestCount: 40
      });

      return {
        agentId: 'theme',
        agentName: 'Theme Agent',
        text: `Recomendação de tema: ${response.recommendedTheme}. Paleta sugerida: ${response.palette}. ${response.rationale}`,
        details: response
      };
    }

    if (/planejamento|agenda|cronograma|tarefas|lista|evento/.test(normalized)) {
      const response = plannerAgentService.createEventPlan({
        theme: 'Super Festa Mario',
        budget: 6500,
        guestCount: 60,
        location: 'sala de festas',
        preferences: ['jogos', 'foto interativa']
      });

      return {
        agentId: 'planner',
        agentName: 'Planner Agent',
        text: `Plano criado com ${response.checklist.length} tarefas. Primeira tarefa: ${response.checklist[0]?.title}`,
        details: response
      };
    }

    if (/fornecedor|preço|mercado|compra|orçamento|custo|valor|cotação/.test(normalized)) {
      const response = marketAgentService.compareOptions({
        item: 'balões',
        budget: 1200,
        marketplacePreference: 'fornecedor local'
      });

      return {
        agentId: 'market',
        agentName: 'Market Agent',
        text: `Melhor opção: ${response.recommendation}. Marketplace: ${response.marketplace}. Preço estimado: R$ ${response.estimatedPrice}.`,
        details: response
      };
    }

    if (/estoque|inventário|repor|reposição|item|disponibilidade/.test(normalized)) {
      const response = inventoryAgentService.evaluateStock({ itemIds: ['item-1', 'item-2', 'item-3'] });
      const restock = response.restockNeeded.length > 0 ? response.restockNeeded.join(', ') : 'Nenhum item crítico encontrado';

      return {
        agentId: 'inventory',
        agentName: 'Inventory Agent',
        text: `Itens que precisam ser reabastecidos: ${restock}.`,
        details: response
      };
    }

    if (/tendência|tendências|popular|trending|cores em alta|tema em alta/.test(normalized)) {
      const response = trendAgentService.analyze({ timeframe: '90d' });

      return {
        agentId: 'trend',
        agentName: 'Trend Agent',
        text: `Tendências atuais: ${response.topThemes.join(', ')}. Cores em alta: ${response.topColors.join(', ')}. ${response.recommendation}`,
        details: response
      };
    }

    if (/orçamento|budget|custo|margem|lucro|financeiro/.test(normalized)) {
      const response = budgetAgentService.reviewBudget({
        projectEstimate: 5800,
        budgetLimit: 6200,
        costBreakdown: [
          { category: 'Materiais', cost: 2400 },
          { category: 'Decoração', cost: 1500 },
          { category: 'Mão de obra', cost: 1200 },
          { category: 'Transporte', cost: 800 }
        ]
      });

      return {
        agentId: 'budget',
        agentName: 'Budget Agent',
        text: `${response.advice} Variância: ${response.variance >= 0 ? `+${response.variance}` : response.variance}.`,
        details: response
      };
    }

    if (/compras|lista de compras|shopping|otimização|prioridade/.test(normalized)) {
      const response = shoppingAgentService.optimizeList({
        items: [
          { name: 'Balões metalizados', requiredQuantity: 80, estimatedCost: 90 },
          { name: 'Cortina de led', requiredQuantity: 4, estimatedCost: 140 }
        ],
        budget: 1300
      });

      return {
        agentId: 'shopping',
        agentName: 'Shopping Agent',
        text: `Priorização concluída. Itens de alta prioridade: ${response.prioritizedItems.filter((item) => item.priority === 'high').map((item) => item.name).join(', ')}.`,
        details: response
      };
    }

    const knowledgeResponse = knowledgeAgentService.answerQuery({ query: message });

    return {
      agentId: 'knowledge',
      agentName: 'Knowledge Agent',
      text: knowledgeResponse.answer,
      details: knowledgeResponse
    };
  }
}

export const aiService = new AiService();
