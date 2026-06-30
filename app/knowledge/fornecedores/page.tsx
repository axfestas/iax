import { Card } from '@/components/ui/Card';
import { knowledgeService } from '@/services/knowledge';

export default function SupplierPage() {
  const suppliers = knowledgeService.getSuppliers();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Fornecedores</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Fornecedores de festa por categoria.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Consulte fornecedores com rating e região para facilitar compras e cotações.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {suppliers.map((supplier) => (
          <Card key={supplier.id} title={supplier.name} description={`${supplier.category} • ${supplier.region}`}>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
              <p>Rating: {supplier.rating.toFixed(1)}</p>
              {supplier.contact && <p>Contato: {supplier.contact}</p>}
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
