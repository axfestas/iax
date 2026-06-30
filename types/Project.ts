export interface Project {
  id: string;
  name: string;
  themeId: string;
  customerId: string;
  status: 'planning' | 'confirmed' | 'executing' | 'completed';
  budget: number;
  guests: number;
  date: string;
  location: string;
}
