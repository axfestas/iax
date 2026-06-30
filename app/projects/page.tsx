import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { projectsService } from '@/services/projects';

export default function ProjectsPage() {
  const projects = projectsService.getProjects();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projetos</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Gerencie seus projetos de festa.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Acompanhe o progresso de cada evento com dados de cliente, tema e status de planejamento.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} title={project.name} description={`Data: ${project.date} • Local: ${project.location}`}>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Status: {project.status}</p>
              <p>Convidados: {project.guests}</p>
              <p>Budget: R$ {project.budget.toFixed(2)}</p>
            </div>
            <div className="mt-4 text-right">
              <Link href="#" className="text-sm font-semibold text-brand-600 hover:text-brand-700">Ver detalhes</Link>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
