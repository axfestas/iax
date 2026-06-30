export interface UploadItem {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'document';
  uploadedAt: string;
}
