import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { knowledgeService } from '@/services/knowledge';

export default async function ThemeListPage() {
  const themes = await knowledgeService.getThemes();

  return (
    <main className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Temas</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Temas de festa e referências visuais.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Navegue por temas construídos para inspirar projetos completos de decoração, festas infantis e eventos corporativos.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {themes.map((theme) => (
          <Card key={theme.id} title={theme.name} description={theme.description}>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
              <span>{theme.occasions.join(', ')}</span>
              <Link href={`/knowledge/temas/${theme.slug}`} className="font-semibold text-brand-600 hover:text-brand-700">Abrir tema</Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
