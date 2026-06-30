import { IdeaEntry } from '@/types';

const ideas: IdeaEntry[] = [
  { id: 'idea-101', title: 'Estação de doces temáticos', description: 'Criar mesa interativa com doces inspirados em Mario.', themeId: 'mario', tags: ['mesa', 'doces'] },
  { id: 'idea-102', title: 'Cortina de balões LED', description: 'Use balões de LED para iluminar a entrada do evento.', tags: ['iluminação', 'balões'] }
];

export class IdeasService {
  getIdeas(): IdeaEntry[] {
    return ideas;
  }
}

export const ideasService = new IdeasService();
