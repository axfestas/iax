import { Card } from '@/components/ui/Card';
import { analyticsService } from '@/services/analytics';

export default function AnalyticsPage() {
  const snapshot = analyticsService.getDashboardSnapshot();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Analytics</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Inteligência de performance e retorno financeiro.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Visualize o desempenho dos temas, o uso de cores e o retorno dos investimentos em festas.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Temas mais pedidos" description="Pontuação e número de eventos por tema.">
          <div className="space-y-3 text-sm text-slate-600">
            {snapshot.themePerformance.map((item) => (
              <div key={item.theme} className="rounded-2xl bg-slate-100 p-4">
                <p className="font-semibold text-slate-900">{item.theme}</p>
                <p>Pedidos: {item.orders}</p>
                <p>Nota: {item.score}%</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Investimento" description="Resultados financeiros do portfólio de festas.">
          <div className="space-y-3 text-sm text-slate-600">
            <p>Investimento: R$ {snapshot.finance.investment.toFixed(2)}</p>
            <p>Receita: R$ {snapshot.finance.revenue.toFixed(2)}</p>
            <p>Lucro: R$ {snapshot.finance.profit.toFixed(2)}</p>
            <p>ROI: {snapshot.finance.roi}%</p>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Cores mais usadas" description="Preferências de paleta nos últimos eventos.">
          <div className="space-y-3 text-sm text-slate-600">
            {snapshot.colorUsage.map((item) => (
              <div key={item.color} className="rounded-2xl bg-slate-100 p-4">
                <p className="font-semibold text-slate-900">{item.color}</p>
                <p>Uso: {item.count} vezes</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Itens mais alugados" description="Demandas de locação por peça.">
          <div className="space-y-3 text-sm text-slate-600">
            {snapshot.itemRentals.map((item) => (
              <div key={item.item} className="rounded-2xl bg-slate-100 p-4">
                <p className="font-semibold text-slate-900">{item.item}</p>
                <p>Alugado: {item.rented} vezes</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
