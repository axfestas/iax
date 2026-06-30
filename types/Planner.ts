export interface PlannerRequest {
  themeSlug: string;
  budget: number;
  guests: number;
  ageGroup: 'child' | 'teen' | 'adult' | 'corporate';
  location: string;
  preferences: string[];
}

export interface PlannerChecklistItem {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueInDays: number;
}

export interface PlannerScheduleItem {
  id: string;
  title: string;
  timeline: string;
  details: string;
}

export interface PlannerRecommendation {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface PlannerResult {
  checklist: PlannerChecklistItem[];
  schedule: PlannerScheduleItem[];
  shoppingList: {
    item: string;
    quantity: number;
    estimatedCost: number;
  }[];
  recommendations: PlannerRecommendation[];
  estimatedBudget: number;
  selectedPalette: string;
}
