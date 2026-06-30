import { Card } from '@/components/ui/Card';
import { marketService } from '@/services/market';

export default function MarketPage() {
  const catalogs = marketService.getMarketCatalogs();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Market</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Pesquisa de mercado e fornecedores.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Estrutura preparada para integrar marketplaces e fornecedores próprios com comparativos de preço.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {catalogs.map((catalog) => (
          <Card key={catalog.marketplace} title={catalog.marketplace} description="Catálogo de produtos para compras de festa.">
            <div className="space-y-3 text-sm text-slate-600">
              {catalog.products.map((product) => (
                <div key={product.id} className="rounded-2xl bg-slate-100 p-4">
                  <p className="font-semibold text-slate-900">{product.title}</p>
                  <p>{product.marketplace}</p>
                  <p>R$ {product.price.toFixed(2)}</p>
                  <p>{product.availability}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
