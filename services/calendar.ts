import { CalendarEvent } from '@/types';

const calendarEvents: CalendarEvent[] = [
  { id: 'evt-001', title: 'Reunião de briefing Mario', date: '2026-07-01', location: 'Sala de conferência', projectId: 'proj-001' },
  { id: 'evt-002', title: 'Visita técnica ao local', date: '2026-07-05', location: 'Buffet Criança Feliz', projectId: 'proj-001' }
];

export class CalendarService {
  getEvents(): CalendarEvent[] {
    return calendarEvents;
  }
}

export const calendarService = new CalendarService();
