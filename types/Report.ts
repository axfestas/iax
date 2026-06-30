export interface Report {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  status: 'draft' | 'published';
}
