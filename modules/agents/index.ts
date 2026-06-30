import { themeAgentPrompt } from './ThemeAgent/prompt';
import { themeAgentService } from './ThemeAgent/service';
import { plannerAgentPrompt } from './PlannerAgent/prompt';
import { plannerAgentService } from './PlannerAgent/service';
import { marketAgentPrompt } from './MarketAgent/prompt';
import { marketAgentService } from './MarketAgent/service';
import { shoppingAgentPrompt } from './ShoppingAgent/prompt';
import { shoppingAgentService } from './ShoppingAgent/service';
import { trendAgentPrompt } from './TrendAgent/prompt';
import { trendAgentService } from './TrendAgent/service';
import { knowledgeAgentPrompt } from './KnowledgeAgent/prompt';
import { knowledgeAgentService } from './KnowledgeAgent/service';
import { inventoryAgentPrompt } from './InventoryAgent/prompt';
import { inventoryAgentService } from './InventoryAgent/service';
import { budgetAgentPrompt } from './BudgetAgent/prompt';
import { budgetAgentService } from './BudgetAgent/service';
import type { AiAgentMetadata } from '@/types/Agent';

export const agentRegistry: AiAgentMetadata[] = [
  {
    id: 'theme',
    name: 'Theme Agent',
    role: 'Designer de temas',
    description: 'Recomenda temas, paletas e conceitos visuais para eventos.',
    prompt: themeAgentPrompt
  },
  {
    id: 'planner',
    name: 'Planner Agent',
    role: 'Organizador de eventos',
    description: 'Cria cronogramas, listas de tarefas e ações para o sucesso do evento.',
    prompt: plannerAgentPrompt
  },
  {
    id: 'market',
    name: 'Market Agent',
    role: 'Analista de mercado',
    description: 'Compara fornecedores, avalia preços e busca oportunidades de compra.',
    prompt: marketAgentPrompt
  },
  {
    id: 'shopping',
    name: 'Shopping Agent',
    role: 'Otimização de compras',
    description: 'Organiza listas de compras e examina as melhores opções de aquisição.',
    prompt: shoppingAgentPrompt
  },
  {
    id: 'trend',
    name: 'Trend Agent',
    role: 'Analista de tendências',
    description: 'Identifica temas e cores em alta para inspirar novos projetos.',
    prompt: trendAgentPrompt
  },
  {
    id: 'knowledge',
    name: 'Knowledge Agent',
    role: 'Consultor de conhecimento',
    description: 'Busca no banco de conhecimento os melhores resultados para dúvidas de projeto.',
    prompt: knowledgeAgentPrompt
  },
  {
    id: 'inventory',
    name: 'Inventory Agent',
    role: 'Gestor de estoque',
    description: 'Monitora níveis de inventário e recomenda reposições quando necessário.',
    prompt: inventoryAgentPrompt
  },
  {
    id: 'budget',
    name: 'Budget Agent',
    role: 'Controlador financeiro',
    description: 'Revisa orçamentos, avalia custos e sugere ajustes para margem de lucro.',
    prompt: budgetAgentPrompt
  }
];

export const agents = {
  themeAgentService,
  plannerAgentService,
  marketAgentService,
  shoppingAgentService,
  trendAgentService,
  knowledgeAgentService,
  inventoryAgentService,
  budgetAgentService
};
