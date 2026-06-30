import './styles/globals.css';
import Sidebar from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'IAX | Sistema operacional para empresas de festas',
  description: 'IAX é uma plataforma inteligente de planejamento de festas, estoque, mercado e conhecimento para empresas de decoração.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen overflow-hidden">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col gap-8 p-6 xl:p-10">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
