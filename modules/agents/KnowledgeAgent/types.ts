export interface KnowledgeAgentRequest {
  query: string;
}

export interface KnowledgeAgentResponse {
  answer: string;
  references: string[];
}
