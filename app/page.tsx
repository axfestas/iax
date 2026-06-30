import Link from 'next/link';
import { ArrowRight, BookOpen, Clock3, Lightbulb, Palette, Search as SearchIcon, Sparkles, Star, Tag, Users2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Search } from '../components/ui';
import { Header } from '../components/layout/Header';
import { GoogleSearchPanel } from '../components/GoogleSearchPanel';
import { analyticsService } from '../services/analytics';
import { inventoryService } from '../services/inventory';
import { knowledgeService } from '../services/knowledge';

import type { AnalyticsSnapshot, InventoryReport, Theme } from '../types';

const upcomingEvents = [
  { title: 'Aniversário João', theme: 'Sonic neon', date: '03 Jul', status: 'Planejamento' },
  { title: 'Festa Maria', theme: 'Princesas modernas', date: '10 Jul', status: 'Inspiração' },
  { title: 'Confraternização', theme: 'Tropical glam', date: '15 Jul', status: 'Check-list' }
];

const aiHighlights = [
  { title: 'Tema tendência', detail: 'Roblox neon', icon: Sparkles },
  { title: 'Paleta ideal', detail: 'Azul Royal + Dourado suave', icon: Palette },
  { title: 'Painel criativo', detail: 'Cilindro em camadas com efeito 3D', icon: Lightbulb }
];

const creativeLibrary = [
  { title: 'Capas de cilindro', subtitle: '3 estilos prontos', icon: Tag },
  { title: 'Painéis', subtitle: '5 propostas visuais', icon: Star },
  { title: 'Personagens', subtitle: '7 referências', icon: Users2 }
];

const quickBlocks = [
  { title: 'Plano rápido', description: 'Checklist inteligente e prático.', icon: Clock3 },
  { title: 'Inspiração visual', description: 'Biblioteca de temas e referências.', icon: BookOpen },
  { title: 'Chat Gemini', description: 'Faça perguntas criativas para IA.', icon: SearchIcon }
];

export default async function Home() {
  const themes = await knowledgeService.getThemes();
  const analytics = analyticsService.getDashboardSnapshot();
  const inventory = await inventoryService.getInventoryReport();

  return (
    <main className="space-y-8">
      <Header />

      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
              <Sparkles className="h-4 w-4" />
              Painel de inteligência criativa
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400">IAX</p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Planeje festas com inspiração visual e IA gratuita.</h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-600">Uma central criativa de temas, painéis, capas de cilindro e planejamento para festas que parecem Pinterest e funcionam como uma assistente de ideias.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/chat" className="inline-flex items-center gap-2 rounded-3xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                Abrir chat Gemini
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/knowledge" className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                Biblioteca criativa
              </Link>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Conectado com AX Festas</p>
              <p className="mt-2">Planos prontos para aniversários, temas e decorações com IA e referências de mercado integradas.</p>
            </div>
          </div>

          <div className="space-y-5 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Busque ideias</p>
              <Search label="Buscar temas, painéis ou referências" />
            </div>
            <div className="grid gap-4">
              {quickBlocks.map((block) => (
                <div key={block.title} className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">{block.title}</p>
                      <p className="mt-2 text-sm text-slate-600">{block.description}</p>
                    </div>
                    <block.icon className="h-5 w-5 text-brand-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.88fr]">
        <Card title="Próximos planejamentos" description="Eventos e temas que já estão em andamento.">
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{event.title}</p>
                    <p className="mt-1 text-sm text-slate-600">Tema: {event.theme}</p>
                  </div>
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{event.status}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">Data do evento: {event.date}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Sugestões da IA" description="Ideias rápidas geradas para temas, cores e painéis.">
          <div className="space-y-4">
            {aiHighlights.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-brand-50 text-brand-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <Card title="Biblioteca criativa" description="Referências visuais para capas, painéis e personagens.">
          <div className="grid gap-4">
            {creativeLibrary.map((item) => (
              <div key={item.title} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <item.icon className="h-5 w-5 text-brand-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Temas AX" description="Temas reais da base AX Festas para usar como inspiração.">
          <div className="space-y-3">
            {themes.slice(0, 4).map((theme) => (
              <div key={theme.id} className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-950">{theme.name}</p>
                <p className="mt-2 text-sm text-slate-600">{theme.description}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Insights de tendência" description="O que está em alta para festas e temas.">
          <div className="space-y-4">
            {analytics.themePerformance.map((item) => (
              <div key={item.theme} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-slate-950">{item.theme}</p>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.orders} pedidos</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">Aceitação: {item.score}%</p>
              </div>
            ))}
            <div className="rounded-3xl bg-white p-4">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Estoque criativo disponível</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{inventory.available}</p>
              <p className="mt-2 text-sm text-slate-600">Itens prontos para projetos visuais.</p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <Card title="Dados AX" description="Insights internos e estoque pronto para usar em projetos criativos.">
          <div className="space-y-4">
            {analytics.themePerformance.map((item) => (
              <div key={item.theme} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-slate-950">{item.theme}</p>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.orders} pedidos</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">Aceitação: {item.score}%</p>
              </div>
            ))}
            <div className="rounded-3xl bg-white p-4">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Estoque criativo disponível</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950">{inventory.available}</p>
              <p className="mt-2 text-sm text-slate-600">Itens prontos para projetos visuais.</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card title="IA gratuita" description="Gemini integrado para gerar temas, paletas e planos de festa.">
            <p className="text-sm leading-6 text-slate-600">Pergunte, crie e itere sem sair da plataforma.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/chat" className="inline-flex items-center gap-2 rounded-3xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                Chat Gemini
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Button variant="outline" size="md">Buscar referências</Button>
            </div>
          </Card>
          <Card title="Busca externa" description="Resultados do Google Search conectados à criação de festas.">
            <p className="text-sm leading-6 text-slate-600">Use a pesquisa externa para encontrar ideias, fornecedores e referências visuais.</p>
          </Card>
        </div>
      </section>

      <section>
        <GoogleSearchPanel />
      </section>
    </main>
  );
}

