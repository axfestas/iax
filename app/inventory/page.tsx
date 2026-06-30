import { Card } from '@/components/ui/Card';
import { inventoryService } from '@/services/inventory';

export default async function InventoryPage() {
  const report = await inventoryService.getInventoryReport();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Inventory</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Gestão de estoque e inteligência de itens.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Monitore disponibilidade, reservas e valor do estoque para eventos e decoração.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card title="Itens totais" description="Quantidade de itens cadastrados no estoque.">
          <p className="text-3xl font-semibold text-slate-950">{report.totalItems}</p>
        </Card>
        <Card title="Disponíveis" description="Itens prontos para uso ou reserva.">
          <p className="text-3xl font-semibold text-slate-950">{report.available}</p>
        </Card>
        <Card title="Reservados" description="Itens que já estão alocados para projetos.">
          <p className="text-3xl font-semibold text-slate-950">{report.reserved}</p>
        </Card>
      </div>

      <Card title="Resumo financeiro" description="Valor total estimado do inventário.">
        <div className="space-y-3 text-sm text-slate-600">
          <p>Valor total: R$ {report.totalValue.toFixed(2)}</p>
          <p>Out of stock: {report.outOfStock}</p>
        </div>
      </Card>

      <Card title="Itens do estoque" description="Detalhes de cada item e seu status.">
        <div className="space-y-3">
          {report.items.map((item) => (
            <div key={item.id} className="rounded-2xl bg-slate-100 p-4">
              <p className="font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-600">Categoria: {item.category}</p>
              <p className="text-sm text-slate-600">Quantidade: {item.quantity}</p>
              <p className="text-sm text-slate-600">Status: {item.status}</p>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}
