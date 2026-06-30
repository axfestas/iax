import { Project } from '@/types';

export class ProjectsService {
  getProjects(): Project[] {
    return [
      {
        id: 'proj-001',
        name: 'Aniversário Mario',
        themeId: 'mario',
        customerId: 'cust-001',
        status: 'planning',
        budget: 1400,
        guests: 48,
        date: '2026-07-15',
        location: 'Buffet Criança Feliz'
      },
      {
        id: 'proj-002',
        name: 'Lançamento Corporativo',
        themeId: 'corporate-elegance',
        customerId: 'cust-002',
        status: 'confirmed',
        budget: 8200,
        guests: 180,
        date: '2026-08-05',
        location: 'Espaço Premium'
      }
    ];
  }
}

export const projectsService = new ProjectsService();
