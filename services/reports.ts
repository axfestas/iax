import { Report } from '@/types';

const reports: Report[] = [
  { id: 'report-001', title: 'Análise de rentabilidade Mario', summary: 'Relatório de performance do tema Mario para eventos infantis.', createdAt: '2026-06-29T10:00:00.000Z', status: 'published' },
  { id: 'report-002', title: 'Relatório de estoque e reposição', summary: 'Resumo de itens críticos e previsão de reabastecimento.', createdAt: '2026-06-29T08:30:00.000Z', status: 'draft' }
];

export class ReportsService {
  getReports(): Report[] {
    return reports;
  }
}

export const reportsService = new ReportsService();
