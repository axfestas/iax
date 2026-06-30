import { UploadItem } from '@/types';

const uploads: UploadItem[] = [
  { id: 'upl-001', name: 'Planta baixa do salão', url: '/uploads/plantasalao.pdf', type: 'document', uploadedAt: '2026-06-28T10:00:00.000Z' },
  { id: 'upl-002', name: 'Referência de flores', url: '/uploads/flores.jpg', type: 'image', uploadedAt: '2026-06-28T11:30:00.000Z' }
];

export class UploadsService {
  getUploads(): UploadItem[] {
    return uploads;
  }
}

export const uploadsService = new UploadsService();
