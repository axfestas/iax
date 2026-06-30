export interface Occasion {
  id: string;
  name: string;
  description?: string;
  category: 'aniversário' | 'casamento' | 'corporativo' | 'infantil' | 'datas comemorativas';
}
