'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { plannerService } from '@/services/planner';
import { PlannerRequest, PlannerResult } from '@/types';

const themes = [
  { label: 'Super Festa Mario', value: 'super-festa-mario' },
  { label: 'Tema Floral', value: 'floral' }
];

export default function PlannerPage() {
  const { register, handleSubmit, formState } = useForm<PlannerRequest>({
    defaultValues: {
      themeSlug: themes[0].value,
      budget: 1200,
      guests: 50,
      ageGroup: 'child',
      location: 'Salão de festas',
      preferences: ['balões', 'cores vibrantes']
    }
  });
  const [plan, setPlan] = useState<PlannerResult | null>(null);

  const onSubmit = async (data: PlannerRequest) => {
    const result = await plannerService.createPlan(data);
    setPlan(result);
  };

  return (
    <main className="space-y-8">
      <Section heading="Planner" description="Monte um evento completo com base no tema, orçamento e número de convidados.">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft xl:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4">
            <Input label="Tema" {...register('themeSlug')} list="themes" />
            <datalist id="themes">
              {themes.map((option) => (
                <option key={option.value} value={option.value} />
              ))}
            </datalist>
            <Input label="Orçamento" type="number" {...register('budget', { valueAsNumber: true })} />
            <Input label="Convidados" type="number" {...register('guests', { valueAsNumber: true })} />
            <Input label="Local" {...register('location')} />
            <Input label="Preferências" {...register('preferences')} placeholder="balões, mesa principal" />
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-[28px] bg-slate-50 p-6">
            <div>
              <p className="text-sm text-slate-500">Grupo etário</p>
              <select className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" {...register('ageGroup')}>
                <option value="child">Infantil</option>
                <option value="teen">Adolescente</option>
                <option value="adult">Adulto</option>
                <option value="corporate">Corporativo</option>
              </select>
            </div>
            <div>
              <p className="text-sm text-slate-500">Resumo</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Use a IAX Planner para gerar checklist, cronograma e lista de compras de forma estruturada.</p>
            </div>
            <Button type="submit" variant="primary" size="lg">Gerar plano</Button>
          </div>
        </form>
      </Section>

      {plan && (
        <Section heading="Plano gerado" description="Resultado do planejamento com itens, cronograma e sugestões de execução.">
          <div className="grid gap-6 xl:grid-cols-2">
            <Card title="Checklist" description="Tarefas priorizadas para a preparação do evento.">
              <ul className="space-y-3 text-sm text-slate-600">
                {plan.checklist.map((item) => (
                  <li key={item.id} className="rounded-2xl bg-slate-100 p-4">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p>{item.dueInDays} dias restantes</p>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Cronograma" description="Principais datas e etapas para montagem do evento.">
              <ul className="space-y-3 text-sm text-slate-600">
                {plan.schedule.map((item) => (
                  <li key={item.id} className="rounded-2xl bg-slate-100 p-4">
                    <p className="font-semibold text-slate-900">{item.timeline}</p>
                    <p>{item.title}</p>
                    <p>{item.details}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <Card title="Lista de compras" description="Itens recomendados com custo estimado.">
              <ul className="space-y-3 text-sm text-slate-600">
                {plan.shoppingList.map((item) => (
                  <li key={item.item} className="rounded-2xl bg-slate-100 p-4">
                    <p className="font-semibold text-slate-900">{item.item}</p>
                    <p>Quantidade: {item.quantity}</p>
                    <p>Custo estimado: R$ {item.estimatedCost.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Recomendações" description="Sugestões de valor para o evento.">
              <ul className="space-y-3 text-sm text-slate-600">
                {plan.recommendations.map((recommendation) => (
                  <li key={recommendation.id} className="rounded-2xl bg-slate-100 p-4">
                    <p className="font-semibold text-slate-900">{recommendation.title}</p>
                    <p>{recommendation.description}</p>
                  </li>
                ))}
              </ul>
            </Card>

            <Card title="Resumo financeiro" description="Orçamento estimado e paleta sugerida.">
              <div className="space-y-3 text-sm text-slate-600">
                <p>Orçamento selecionado: R$ {plan.estimatedBudget.toFixed(2)}</p>
                <p>Paleta recomendada: {plan.selectedPalette}</p>
              </div>
            </Card>
          </div>
        </Section>
      )}
    </main>
  );
}
