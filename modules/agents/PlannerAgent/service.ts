import { PlannerAgentRequest, PlannerAgentResponse } from './types';

export class PlannerAgentService {
  createEventPlan(request: PlannerAgentRequest): PlannerAgentResponse {
    return {
      checklist: [
        { title: 'Definir tema e paleta', dueInDays: 1 },
        { title: 'Confirmar fornecedores de balões e tecidos', dueInDays: 3 },
        { title: 'Agendar montagem no local', dueInDays: 7 }
      ],
      schedule: [
        { timeline: 'Dia 1', description: 'Reunião de briefing com o cliente e validação do tema.' },
        { timeline: 'Dia 3', description: 'Cotação e reserva de itens essenciais.' },
        { timeline: 'Dia 7', description: 'Montagem da decoração e inspeção final.' }
      ],
      notes: `Plano criado para ${request.guestCount} convidados em ${request.location} com foco em ${request.preferences.join(', ')}.`
    };
  }
}

export const plannerAgentService = new PlannerAgentService();
