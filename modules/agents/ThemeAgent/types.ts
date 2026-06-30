export interface ThemeAgentRequest {
  occasion: string;
  preferences: string[];
  budget: number;
  guestCount: number;
}

export interface ThemeAgentResponse {
  recommendedTheme: string;
  palette: string;
  highlights: string[];
  rationale: string;
}
