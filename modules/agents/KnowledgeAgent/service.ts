import { KnowledgeAgentRequest, KnowledgeAgentResponse } from './types';

export class KnowledgeAgentService {
  answerQuery(request: KnowledgeAgentRequest): KnowledgeAgentResponse {
    return {
      answer: `Busquei informações no banco de conhecimento e a melhor recomendação para '${request.query}' é usar temas alinhados ao público alvo com paletas contrastantes.`,
      references: ['Super Festa Mario', 'Paleta Azul Royal', 'Fornecedor Balões & Cia']
    };
  }
}

export const knowledgeAgentService = new KnowledgeAgentService();
