import { Bell, ChevronRight, Moon, SunMedium, UserCircle } from 'lucide-react';
import { Search } from '@/components/ui';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="mb-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Central criativa</p>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">AX Festas</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold text-slate-950">Inspiração, planejamento e IA para festas</h1>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">IAX</span>
          </div>

          <div className="text-sm text-slate-600">Ideias, temas e referências visuais com assistente Gemini para criar festas que encantam.</div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="ghost" size="sm" className="rounded-full p-2">
            <SunMedium className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full p-2">
            <Moon className="h-4 w-4" />
          </Button>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100">
            <Bell className="h-5 w-5" />
          </button>
          <button type="button" className="inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
            <UserCircle className="h-5 w-5 text-slate-700" />
            <span>Time Criativo</span>
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[1fr_auto]">
        <Search label="Buscar temas ou ideias" />
        <div className="hidden items-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 xl:flex">
          <span>Modo</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-slate-900">Inspiração</span>
        </div>
      </div>
    </header>
  );
}
