export interface TrendAgentRequest {
  timeframe: '30d' | '90d' | '12m';
}

export interface TrendAgentResponse {
  topThemes: string[];
  topColors: string[];
  recommendation: string;
}
