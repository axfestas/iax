import { Card } from '@/components/ui/Card';
import { moodboardService } from '@/services/moodboard';

export default function MoodboardPage() {
  const boards = moodboardService.getMoodboards();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Moodboard</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Painéis de inspiração para seus projetos.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Agrupe imagens e referências em moodboards visuais para desenvolvimento criativo.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {boards.map((board) => (
          <Card key={board.id} title={board.title} description={board.description}>
            <p className="mt-4 text-sm text-slate-600">Itens: {board.items.length}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
