import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { knowledgeService } from '@/services/knowledge';

const cards = [
  { title: 'Temas', description: 'Explore temas de festa, paletas e referências especializadas.', href: '/knowledge/temas' },
  { title: 'Paletas', description: 'Veja as combinações de cores mais usadas em festas atuais.', href: '/knowledge/paletas' },
  { title: 'Fornecedores', description: 'Acesse fornecedores estruturados por categoria e região.', href: '/knowledge/fornecedores' },
  { title: 'Tendências', description: 'Descubra tendências para festas, cores e decorações modernas.', href: '/knowledge/tendencias' }
];

export default async function KnowledgePage() {
  const themes = await knowledgeService.getThemes();

  return (
    <main className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Knowledge</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Banco de conhecimento especializado em festas.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Organize temas, paletas, fornecedores e referências com uma base relacional preparada para decisões de produção, compra e criação.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description}>
            <div className="mt-4 flex justify-end">
              <Link href={card.href} className="text-sm font-semibold text-brand-600 hover:text-brand-700">Abrir →</Link>
            </div>
          </Card>
        ))}
      </div>

      <section className="grid gap-6 xl:grid-cols-3">
        {themes.map((theme) => (
          <Card key={theme.id} title={theme.name} description={theme.description}>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>{theme.palettes.length} paleta(s)</p>
              <p>{theme.suppliers.length} fornecedor(es)</p>
            </div>
            <div className="mt-4 flex justify-end">
              <Link href={`/knowledge/temas/${theme.slug}`} className="text-sm font-semibold text-brand-600 hover:text-brand-700">Ver tema</Link>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
