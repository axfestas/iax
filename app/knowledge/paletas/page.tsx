import { Card } from '@/components/ui/Card';
import { knowledgeService } from '@/services/knowledge';

export default function PalettePage() {
  const palettes = knowledgeService.getPalettes();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Paletas</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Inspiração de cor para festas.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Visualize as paletas mais utilizadas e conecte-as aos temas do banco de conhecimento.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {palettes.map((palette) => (
          <Card key={palette.id} title={palette.name} description={palette.description}>
            <div className="mt-4 flex flex-wrap gap-2">
              {palette.colors.map((color) => (
                <span key={color} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">{color}</span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
