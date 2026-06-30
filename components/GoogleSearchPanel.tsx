'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Search } from '@/components/ui';

export function GoogleSearchPanel() {
  const [query, setQuery] = useState('tema festa infantil');
  const [results, setResults] = useState<Array<{ title: string; snippet: string; link: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: query.trim() })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Erro ao buscar no Google.');
      }

      setResults(
        (data.results ?? []).map((item: any) => ({
          title: item.title || item.htmlTitle || 'Resultado sem título',
          snippet: item.snippet || item.htmlSnippet || '',
          link: item.link || item.formattedUrl || '#'
        }))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Busca inteligente" description="Pesquise referências externas com Google Search e use resultados diretamente no seu planejamento.">
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex-1">
            <Search label="Buscar ideias no Google" value={query} onChange={(event) => setQuery(event.target.value)} />
          </div>
          <Button type="button" variant="primary" size="md" onClick={handleSearch} disabled={loading || !query.trim()}>
            {loading ? 'Buscando...' : 'Buscar'}
          </Button>
        </div>

        {error && <div className="rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>}

        <div className="space-y-3">
          {results.slice(0, 3).map((result) => (
            <a key={result.link} href={result.link} target="_blank" rel="noreferrer" className="block rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:border-brand-300 hover:bg-white">
              <p className="text-sm font-semibold text-slate-950">{result.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{result.snippet}</p>
              <p className="mt-3 text-xs text-slate-500">{result.link}</p>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}
