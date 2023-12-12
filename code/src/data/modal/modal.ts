import { ModalType, ModalVariant } from '../enums';
import { View } from './view';

export interface Modal {
  title?: string;
  type?: ModalType;
  variant?: ModalVariant;
  currentView?: string;
  permission?: string;
  views?: View[];
  modalComponent?: React.ComponentType<any>
}