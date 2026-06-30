import Link from 'next/link';
import { Button, Card, Section } from '@/components/ui';
import { Header } from '@/components/layout';

const modules = [
  { title: 'Planner', description: 'Monte eventos completos com cronogramas e listas de compras inteligentes.', href: '/planner' },
  { title: 'Knowledge', description: 'Consulte temas, paletas, materiais e referências especializadas.', href: '/knowledge' },
  { title: 'Market', description: 'Prepare compras e pesquisas de preço com fornecedores e marketplaces.', href: '/market' },
  { title: 'Inventory', description: 'Controle estoque, itens alugados e necessidades de reposição.', href: '/inventory' },
  { title: 'Analytics', description: 'Acompanhe performance de temas, investimentos e lucro.', href: '/analytics' },
  { title: 'Agents', description: 'Acesse consultores especializados em temas, planejamento e orçamento.', href: '/agents' },
  { title: 'Chat', description: 'Soporte com agentes especializados em festas e tendências.', href: '/chat' }
];

export default function Home() {
  return (
    <div className="space-y-10">
      <Header />

      <Section heading="Visão geral" description="Uma base operacional para empresas de festas com foco em conhecimento, planejamento e inteligência de mercado.">
        <div className="grid gap-6 xl:grid-cols-3">
          <Card title="Plataforma operacional" description="Módulos nativos para todos os processos de produção e venda de eventos." />
          <Card title="Conhecimento relacional" description="Banco de temas, materiais e fornecedores com estrutura modular e preparada para escala." />
          <Card title="Arquitetura preparada" description="Integração futura com AX Gestão e serviços em nuvem para empresas de decoração." />
        </div>
      </Section>

      <Section heading="Módulos principais" description="Acesse os recursos centrais do sistema e comece a trabalhar com planejamento e análise.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.href} title={module.title} description={module.description}>
              <div className="mt-4 flex justify-end">
                <Link href={module.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Abrir →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section heading="Acelere sua operação" description="Use o módulo de AI e os agentes para tomar decisões mais seguras e acertadas nos seus projetos.">
        <div className="grid gap-6 xl:grid-cols-2">
          <Card title="Inteligência de estoque" description="Relacione itens de evento com fornecedores, preços e disponibilidade em tempo real." />
          <Card title="Análise de tendências" description="Identifique temas e cores em alta para eventos corporativos e festas de aniversário." />
        </div>
      </Section>

      <div className="flex flex-wrap items-center gap-4 rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Próximo passo</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Explore a base de conhecimento de temas</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Abra o módulo Knowledge e veja como a IAX organiza temas, cores, painéis e fornecedores em uma base relacional.</p>
        </div>
        <Link href="/knowledge" className="rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600">Abrir Knowledge</Link>
      </div>
    </div>
  );
}
