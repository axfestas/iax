import { Card } from '@/components/ui/Card';
import { calendarService } from '@/services/calendar';

export default function CalendarPage() {
  const events = calendarService.getEvents();

  return (
    <main className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Calendar</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-950">Agenda de eventos e prazos.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">Gerencie reuniões, instalações e datas-chave para cada projeto de festa.</p>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        {events.map((event) => (
          <Card key={event.id} title={event.title} description={event.location}>
            <p className="mt-4 text-sm text-slate-600">Data: {new Date(event.date).toLocaleDateString('pt-BR')}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
