import { Card } from '@/components/ui/Card';
import { galleryService } from '@/services/gallery';

export default function GalleryPage() {
  const items = galleryService.getGalleryItems();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Gallery</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Galeria de projetos e referências visuais.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Visualize trabalhos, moodboards e ideias para decorar festas com estilo.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} title={item.title} description={item.category}>
            <div className="mt-4 h-40 w-full overflow-hidden rounded-3xl bg-slate-100">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
