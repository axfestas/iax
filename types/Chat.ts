export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
}

export interface ChatAgent {
  id: string;
  name: string;
  role: string;
  description: string;
}
