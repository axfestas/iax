'use client';

import { useMemo, useState } from 'react';
import { chatService } from '@/services/chat';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function ChatPage() {
  const [messages, setMessages] = useState(chatService.getInitialConversation());
  const [text, setText] = useState('');

  const agent = useMemo(() => chatService.getAgent(), []);

  const handleSend = () => {
    if (!text.trim()) return;
    setMessages(chatService.sendMessage(text.trim()));
    setText('');
  };

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Chat</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Converse com o assistente de festas.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Use o chat para receber sugestões de temas, planejamento, mercado e estoque em uma experiência conversacional.</p>
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

          <div className="flex gap-3">
            <input
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Descreva o que você precisa para o evento"
              className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
            <Button type="button" variant="primary" size="md" onClick={handleSend}>
              Enviar
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}
