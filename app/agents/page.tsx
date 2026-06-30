import { aiService } from '@/services/ai';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
import Link from 'next/link';

export default function AgentsPage() {
  const agents = aiService.getAgents();

  return (
    <main className="space-y-10">
      <Header />

      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI Agents</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Assistentes especializados para cada etapa do projeto.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Conheça os agentes que ajudam a planejar, escolher temas, analisar fornecedores, controlar estoque e revisar orçamentos.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {agents.map((agent) => (
          <Card key={agent.id} title={agent.name} description={agent.description}>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">{agent.role}</p>
              <Link href="/chat" className="rounded-2xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600">
                Conversar
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Dica</p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-950">Use o chat para acionar qualquer agente automaticamente.</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Envie sua necessidade no chat e a IAX seleciona o agente mais adequado para tema, mercado, estoque, orçamento ou planejamento.</p>
      </div>
    </main>
  );
}
