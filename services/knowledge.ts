import { Color, Idea, Palette, Reference, Supplier, Theme, ThemeIntelligence, Trend } from '@/types';
import marioTheme from '@/knowledge/temas/mario/index.json';
import marioColors from '@/knowledge/temas/mario/colors.json';
import marioReferences from '@/knowledge/temas/mario/references.json';
import marioShopping from '@/knowledge/temas/mario/shopping.json';
import marioIdeas from '@/knowledge/temas/mario/ideas.json';
import { palettes } from '@/knowledge/paletas';
import { panels } from '@/knowledge/painéis';
import { cylinders } from '@/knowledge/cilindros';
import { fabrics } from '@/knowledge/tecidos';
import { axFestasService } from '@/services/axFestasService';
import { themeIntelligenceService } from '@/services/ThemeIntelligenceService';

const themeData: Theme[] = [
  marioTheme
];

const paletteData: Palette[] = palettes;
const colorData: Color[] = marioColors;
const supplierData: Supplier[] = [
  { id: 'forn1', name: 'Balões & Cia', category: 'Balões', rating: 4.8, region: 'São Paulo', contact: 'contato@baloescia.com' },
  { id: 'forn2', name: 'DecoraFesta', category: 'Decoração', rating: 4.6, region: 'Curitiba', contact: 'vendas@decorafesta.com' }
];

const trendData: Trend[] = [
  { id: 'tendencia-2026', name: 'Festas temáticas com molduras 3D', popularity: 88, relatedThemes: ['mario'] }
];
const referenceData: Reference[] = marioReferences;
const ideaData: Idea[] = marioIdeas;
const shoppingData = marioShopping;

export class KnowledgeService {
  async getThemes() {
    return axFestasService.themeRepository.fetchThemes();
  }

  async getThemeBySlug(slug: string) {
    return axFestasService.themeRepository.fetchThemeBySlug(slug);
  }

  getThemeById(id: string) {
    return themeData.find((theme) => theme.id === id) ?? null;
  }

  getThemeIntelligence(themeId: string): ThemeIntelligence | null {
    return themeIntelligenceService.getIntelligenceByThemeId(themeId);
  }

  getPalettes() {
    return paletteData;
  }

  getColors() {
    return colorData;
  }

  getPanels() {
    return panels;
  }

  getCylinders() {
    return cylinders;
  }

  getFabrics() {
    return fabrics;
  }

  getSuppliers() {
    return supplierData;
  }

  getTrends() {
    return trendData;
  }

  getReferences() {
    return referenceData;
  }

  getIdeas() {
    return ideaData;
  }

  getShoppingList() {
    return shoppingData;
  }
}

export const knowledgeService = new KnowledgeService();
