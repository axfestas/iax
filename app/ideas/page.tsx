import { Card } from '@/components/ui/Card';
import { ideasService } from '@/services/ideas';

export default function IdeasPage() {
  const ideas = ideasService.getIdeas();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Ideas</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Inspiração rápida para festas.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Liste ideias criativas de design, montagem e experiências para clientes.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {ideas.map((idea) => (
          <Card key={idea.id} title={idea.title} description={idea.tags?.join(', ')}>
            <p className="mt-4 text-sm text-slate-600">{idea.description}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
