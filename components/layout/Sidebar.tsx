import Link from 'next/link';
import { BookOpen, FileText, LayoutDashboard, MessageCircle, Package2, ShoppingBag, Sparkles, TrendingUp, Users, Settings2 } from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Planner', href: '/planner', icon: Sparkles },
  { label: 'Knowledge', href: '/knowledge', icon: BookOpen },
  { label: 'Market', href: '/market', icon: ShoppingBag },
  { label: 'Inventory', href: '/inventory', icon: Package2 },
  { label: 'Analytics', href: '/analytics', icon: TrendingUp },
  { label: 'Agents', href: '/agents', icon: Sparkles },
  { label: 'Chat', href: '/chat', icon: MessageCircle },
  { label: 'Projects', href: '/projects', icon: FileText },
  { label: 'Customers', href: '/customers', icon: Users },
  { label: 'Settings', href: '/settings', icon: Settings2 }
];

export default function Sidebar() {
  return (
    <aside className="hidden h-full w-80 shrink-0 border-r border-slate-200 bg-white p-6 xl:flex xl:flex-col">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-500 text-white shadow-soft">IAX</div>
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">IAX</p>
          <h2 className="text-xl font-semibold text-slate-950">Festas Inteligentes</h2>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900">
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
        <p className="font-semibold text-slate-900">AX Gestão pronto</p>
        <p className="mt-2 leading-6 text-slate-600">Estrutura preparada para integração futura com o ERP corporativo AX Gestão.</p>
      </div>
    </aside>
  );
}
