export interface Trend {
  id: string;
  name: string;
  description?: string;
  popularity: number;
  relatedThemes: string[];
}
