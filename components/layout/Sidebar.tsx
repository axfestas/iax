import Link from 'next/link';
import { Search } from '@/components/ui';
import { BookOpen, LayoutDashboard, MessageCircle, Package2, Settings2, ShoppingBag, Sparkles, TrendingUp, Users, Wrench } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '/', icon: LayoutDashboard },
  { label: 'Planejador', href: '/planner', icon: Sparkles },
  { label: 'Inspiração', href: '/knowledge', icon: BookOpen },
  { label: 'Biblioteca', href: '/gallery', icon: Package2 },
  { label: 'Tendências', href: '/analytics', icon: TrendingUp },
  { label: 'Agentes', href: '/agents', icon: Users },
  { label: 'Chat', href: '/chat', icon: MessageCircle }
];

const footerItems = [
  { label: 'Configurações', href: '/settings', icon: Settings2 },
  { label: 'Ajuda', href: '/settings#integrations', icon: Wrench }
];

export default function Sidebar() {
  return (
    <aside className="hidden h-full w-96 shrink-0 border-r border-slate-200 bg-white p-6 xl:flex xl:flex-col">
      <div className="mb-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-500 text-base font-semibold text-white shadow-soft">IAX</div>
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-slate-400">Painel corporativo</p>
            <h2 className="text-xl font-semibold text-slate-950">IAX Operacional</h2>
          </div>
        </div>
        <p className="text-sm leading-6 text-slate-600">Centro operacional dentro do ecossistema AX Festas.</p>
      </div>

      <div className="mb-6">
        <Search label="Buscar módulo ou item" />
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Integração AX Festas</p>
          <p className="mt-2 leading-6 text-slate-600">Dados sincronizados com o ERP corporativo via pontos de integração planejados.</p>
        </div>

        <div className="space-y-2">
          {footerItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
