import { NextRequest } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const query = body?.query;

  if (!query || typeof query !== 'string') {
    return new Response(JSON.stringify({ error: 'A query é obrigatória.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const apiKey = process.env.GOOGLE_SEARCH_API_KEY;
  const cx = process.env.GOOGLE_SEARCH_ENGINE_ID;

  if (!apiKey || !cx) {
    return new Response(JSON.stringify({ error: 'GOOGLE_SEARCH_API_KEY ou GOOGLE_SEARCH_ENGINE_ID não configurados.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const url = `https://www.googleapis.com/customsearch/v1?key=${encodeURIComponent(apiKey)}&cx=${encodeURIComponent(cx)}&q=${encodeURIComponent(query)}`;

  const response = await fetch(url);
  const result = await response.json().catch(() => null);

  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Falha ao acessar a busca do Google.', details: result }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({ results: result.items ?? [], raw: result }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
