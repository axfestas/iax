'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Search } from '@/components/ui';
import { ArrowRight, Send } from 'lucide-react';
import type { ChatAgent, ChatMessage } from '@/types';

const agent: ChatAgent = {
  id: 'agent-iax',
  name: 'IAX Gemini',
  role: 'Assistente criativo',
  description: 'Gera temas, paletas, ideias de painéis e planos de festa com linguagem livre.'
};

const initialMessages: ChatMessage[] = [
  { id: 'msg-1', sender: 'agent', text: 'Olá! Me conte qual festa você quer planejar hoje.', timestamp: new Date().toISOString() }
];

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (!text.trim()) return;
    const userMessage: ChatMessage = { id: `msg-${Date.now()}-user`, sender: 'user', text: text.trim(), timestamp: new Date().toISOString() };
    setMessages((current) => [...current, userMessage]);
    setText('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage.text })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Erro ao consultar Gemini.');
      }

      const agentMessage: ChatMessage = {
        id: `msg-${Date.now()}-agent`,
        sender: 'agent',
        text: data.text || 'Desculpe, não consegui gerar uma resposta.',
        timestamp: new Date().toISOString()
      };

      setMessages((current) => [...current, agentMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">IA Criativa</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Planeje sua festa com Gemini.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Pergunte sobre tema, painel, cores ou estrutura e receba ideias e sugestões em linguagem natural.</p>
      </section>

      <Card>
        <div className="space-y-6">
          <div className="rounded-[28px] bg-slate-50 p-6">
            <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">{agent.name}</p>
              <p className="text-sm text-slate-600">{agent.description}</p>
            </div>
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`rounded-3xl p-4 ${message.sender === 'agent' ? 'bg-slate-100 text-slate-900' : 'bg-brand-500 text-white'}`}>
                  <p className="text-sm">{message.text}</p>
                  <p className="mt-2 text-xs text-slate-500">{new Date(message.timestamp).toLocaleString('pt-BR')}</p>
                </div>
              ))}
            </div>
          </div>

          {error && <div className="rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>}

          <div className="space-y-4">
            <Search label="Pergunte à IA Gemini" value={text} onChange={(event) => setText(event.target.value)} />
            <div className="flex flex-wrap items-center gap-3">
              <Button type="button" variant="primary" size="md" onClick={handleSend} disabled={loading || !text.trim()}>
                {loading ? 'Gerando...' : 'Enviar'}
              </Button>
              <Button type="button" variant="outline" size="md" onClick={() => setText('')}>Limpar</Button>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
}
