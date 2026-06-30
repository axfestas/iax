import { aiService } from '@/services/ai';
import { ChatAgent, ChatMessage } from '@/types';

const agent: ChatAgent = {
  id: 'agent-iax',
  name: 'IAX Assistente',
  role: 'Especialista em festas',
  description: 'Auxilia no planejamento, mercado, estoque e tendências de decoração de eventos.'
};

const initialMessages: ChatMessage[] = [
  { id: 'msg-1', sender: 'agent', text: 'Olá! Como posso ajudar a planejar sua próxima festa?', timestamp: new Date().toISOString() }
];

export class ChatService {
  getInitialConversation(): ChatMessage[] {
    return initialMessages;
  }

  sendMessage(message: string): ChatMessage[] {
    const timestamp = new Date().toISOString();
    const userMessage: ChatMessage = { id: `msg-${Date.now()}-user`, sender: 'user', text: message, timestamp };
    const agentReply = aiService.routeMessage(message);
    const agentMessage: ChatMessage = {
      id: `msg-${Date.now()}-agent`,
      sender: 'agent',
      text: agentReply.text,
      timestamp
    };

    return [...initialMessages, userMessage, agentMessage];
  }

  getAgent(): ChatAgent {
    return agent;
  }
}

export const chatService = new ChatService();
