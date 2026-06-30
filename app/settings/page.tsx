import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function SettingsPage() {
  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Configurações</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Ajuste a plataforma IAX para sua operação.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Gerencie tema, moeda, notificações e integração com serviços externos.</p>
      </section>

      <Card title="Configuração rápida" description="Ajustes para começar a usar a plataforma com sua empresa.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-900">Modo de tema</label>
              <select className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900">
                <option>Claro</option>
                <option>Escuro</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-900">Moeda</label>
              <select className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900">
                <option>BRL</option>
                <option>USD</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-900">Notificações</label>
              <div className="mt-3 flex items-center gap-4">
                <Button variant="outline" size="md">Ativar</Button>
                <Button variant="ghost" size="md">Desativar</Button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-900">Integrações</label>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p>Supabase: habilitado</p>
                <p>Cloudflare Pages: habilitado</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-right">
          <Button size="lg">Salvar configurações</Button>
        </div>
      </Card>
    </main>
  );
}
