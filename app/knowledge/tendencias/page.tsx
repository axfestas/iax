import { Card } from '@/components/ui/Card';
import { knowledgeService } from '@/services/knowledge';

export default function TrendsPage() {
  const trends = knowledgeService.getTrends();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Tendências</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Tendências em festas e decoração.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Monitore padrões de cores, temas e experiências que estão em alta no mercado de festas.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {trends.map((trend) => (
          <Card key={trend.id} title={trend.name} description={trend.description || 'Tendência emergente.'}>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
              <p>Popularidade: {trend.popularity}%</p>
              <p>Temas relacionados: {trend.relatedThemes.join(', ')}</p>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
