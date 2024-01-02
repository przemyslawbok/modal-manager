import { ContentType, ModalVariant } from '../enums';

export interface Modal {
  title?: string;
  type?: ContentType;
  variant?: ModalVariant;
  views?: ContentType[];
  currentView?: ContentType;
}