import { Moodboard } from '@/types';

const moodboards: Moodboard[] = [
  { id: 'mood-001', title: 'Moodboard Mario', description: 'Referências de cores, texturas e iluminação para festa Mario.', items: ['gal-001', 'gal-002'], createdAt: '2026-06-29T09:00:00.000Z' }
];

export class MoodboardService {
  getMoodboards(): Moodboard[] {
    return moodboards;
  }
}

export const moodboardService = new MoodboardService();
