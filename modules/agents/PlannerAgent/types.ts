export interface PlannerAgentRequest {
  theme: string;
  budget: number;
  guestCount: number;
  location: string;
  preferences: string[];
}

export interface PlannerAgentResponse {
  checklist: Array<{ title: string; dueInDays: number }>;
  schedule: Array<{ timeline: string; description: string }>;
  notes: string;
}
