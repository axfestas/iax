import { knowledgeService } from '@/services/knowledge';
import { Card } from '@/components/ui/Card';
import { EmptyState } from '@/components/ui/EmptyState';

interface ThemePageProps {
  params: {
    slug: string;
  };
}

export default async function ThemePage({ params }: ThemePageProps) {
  const theme = await knowledgeService.getThemeBySlug(params.slug);
  const intelligence = theme ? knowledgeService.getThemeIntelligence(theme.id) : null;

  if (!theme) {
    return <EmptyState title="Tema não encontrado" description="Verifique a URL ou volte para a listagem de temas." />;
  }

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Tema operacional</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950">{theme.name}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">{theme.description}</p>
          </div>
          <div className="grid gap-3 rounded-[28px] bg-slate-50 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Ocasiões</p>
              <p className="mt-2 text-sm text-slate-700">{theme.occasions.join(', ')}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Fornecedores</p>
              <p className="mt-2 text-sm text-slate-700">{theme.suppliers.length}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Paletas</p>
              <p className="mt-2 text-sm text-slate-700">{theme.palettes.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {intelligence ? (
        <section className="grid gap-6 xl:grid-cols-2">
          <Card title="Perfil de inteligência IAX" description="Enriquecimento de tema mantido separadamente do dado operacional.">
            <div className="space-y-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Descrição AI</p>
              <p>{intelligence.aiDescription}</p>
              <p className="font-semibold text-slate-900">Market analysis</p>
              <p>{intelligence.marketAnalysis}</p>
              <p className="font-semibold text-slate-900">Planning notes</p>
              <p>{intelligence.planningNotes}</p>
            </div>
          </Card>

          <Card title="Sugestões IAX" description="Decoração, compras e inspirações para o tema.">
            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-semibold text-slate-900">Paleta inteligente</p>
                <p>{intelligence.colorPalette.join(', ')}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Baloões sugeridos</p>
                <p>{intelligence.balloonSuggestions.join(', ')}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Compras recomendadas</p>
                <p>{intelligence.shoppingRecommendations.join(', ')}</p>
              </div>
            </div>
          </Card>
        </section>
      ) : (
        <Card title="Perfil de inteligência" description="Ainda sem dados de enriquecimento para esse tema." />
      )}

      <section className="grid gap-6 xl:grid-cols-3">
        <Card title="Paletas relacionadas" description="Cores selecionadas para este tema.">
          <div className="space-y-3 text-sm text-slate-600">
            {theme.palettes.map((palette) => (
              <p key={palette} className="rounded-2xl bg-slate-100 px-4 py-3">{palette}</p>
            ))}
          </div>
        </Card>

        <Card title="Referências" description="Links e inspirações para aplicação.">
          <div className="space-y-3 text-sm text-slate-600">
            {knowledgeService.getReferences().map((reference) => (
              <a key={reference.id} href={reference.url} target="_blank" rel="noreferrer" className="block rounded-2xl bg-slate-100 px-4 py-3 transition hover:bg-slate-200">
                {reference.title}
              </a>
            ))}
          </div>
        </Card>

        <Card title="Ideias" description="Sugestões criativas para decoração.">
          <div className="space-y-3 text-sm text-slate-600">
            {knowledgeService.getIdeas().map((idea) => (
              <div key={idea.id} className="rounded-2xl bg-slate-100 px-4 py-3">
                <p className="font-semibold text-slate-900">{idea.title}</p>
                <p>{idea.summary}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
