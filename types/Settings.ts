export interface UserSettings {
  themeMode: 'light' | 'dark';
  currency: 'BRL' | 'USD' | 'EUR';
  locale: string;
  notifications: boolean;
  integrations: {
    supabase: boolean;
    cloudflare: boolean;
  };
}
