import { Card } from '@/components/ui/Card';
import { reportsService } from '@/services/reports';

export default function ReportsPage() {
  const reports = reportsService.getReports();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Reports</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Relatórios gerenciais e análises.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Acesse relatórios de operacionalização, estoque e performance de eventos.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {reports.map((report) => (
          <Card key={report.id} title={report.title} description={report.summary}>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
              <p>{new Date(report.createdAt).toLocaleDateString('pt-BR')}</p>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{report.status}</span>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
