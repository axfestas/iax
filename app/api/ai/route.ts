const DEFAULT_GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generate';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const prompt = body?.prompt;

  if (!prompt || typeof prompt !== 'string') {
    return new Response(JSON.stringify({ error: 'O prompt é obrigatório.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: 'GEMINI_API_KEY não configurada.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const endpoint = process.env.GEMINI_API_URL?.trim() || DEFAULT_GEMINI_ENDPOINT;
  const url = endpoint.includes('?') ? `${endpoint}&key=${encodeURIComponent(key)}` : `${endpoint}?key=${encodeURIComponent(key)}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: { text: prompt },
      temperature: 0.7,
      maxOutputTokens: 500,
      candidateCount: 1
    })
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Falha ao acessar o Gemini.', details: result }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const text = result?.candidates?.[0]?.output || result?.output?.text || JSON.stringify(result);

  return new Response(JSON.stringify({ text, raw: result }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
