import { Moon, SunMedium } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="mb-8 flex flex-col gap-4 rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Operacional de Festas</p>
        <h1 className="text-3xl font-semibold text-slate-950">Gerencie eventos, tendências e estoque com inteligência.</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600">IAX combina planejamento, conhecimento e análise para transformar a operação de empresas de decoração de festas em um sistema moderno plano de ação.</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="secondary" size="md">
          <SunMedium className="h-4 w-4" /> Modo Claro
        </Button>
        <Button variant="ghost" size="md">
          <Moon className="h-4 w-4" /> Modo Escuro
        </Button>
      </div>
    </header>
  );
}
