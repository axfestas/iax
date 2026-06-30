'use client';

import { useMemo } from 'react';
import { Card } from '@/components/ui/Card';
import { uploadsService } from '@/services/uploads';

export default function UploadsPage() {
  const uploads = useMemo(() => uploadsService.getUploads(), []);

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Uploads</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Armazene e gerencie arquivos de projeto.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Organize plantas, referências e documentos de produção em um repositório central.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {uploads.map((upload) => (
          <Card key={upload.id} title={upload.name} description={upload.type}>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Data: {new Date(upload.uploadedAt).toLocaleDateString('pt-BR')}</p>
              <a href={upload.url} className="font-semibold text-brand-600 hover:text-brand-700">Abrir arquivo</a>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
