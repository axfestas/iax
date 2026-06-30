import { Card } from '@/components/ui/Card';
import { customersService } from '@/services/customers';

export default function CustomersPage() {
  const customers = customersService.getCustomers();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Clientes</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Relacione seus clientes e preferências.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Visualize as empresas cliente e seus pontos de contato para eventos personalizados.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {customers.map((customer) => (
          <Card key={customer.id} title={customer.name} description={customer.company ?? 'Nenhuma empresa informada'}>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Email: {customer.email}</p>
              <p>Telefone: {customer.phone}</p>
              <p>Preferências: {customer.preferences?.join(', ')}</p>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
