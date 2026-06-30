import { Theme } from '@/types';

export interface ThemeRepository {
  fetchThemes(): Promise<Theme[]>;
  fetchThemeBySlug(slug: string): Promise<Theme | null>;
}

export class AxFestasThemeRepository implements ThemeRepository {
  private themes: Theme[] = [
    {
      id: 'mario',
      slug: 'mario',
      name: 'Super Festa Mario',
      description: 'Tema infantil inspirado no universo do Mario com cores vibrantes e decoração divertida.',
      palettes: ['Azul Royal', 'Vermelho Mario'],
      characters: ['Mario', 'Luigi'],
      events: ['Aniversário infantil'],
      suppliers: ['forn1', 'forn2'],
      occasions: ['Aniversário'],
      createdAt: '2026-01-01T00:00:00.000Z',
      updatedAt: '2026-01-01T00:00:00.000Z'
    }
  ];

  async fetchThemes(): Promise<Theme[]> {
    return this.themes;
  }

  async fetchThemeBySlug(slug: string): Promise<Theme | null> {
    return this.themes.find((theme) => theme.slug === slug) ?? null;
  }
}
