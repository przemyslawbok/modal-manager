import { ModalType, ModalVariant } from '@/data/enums';
import { Modal, View } from '@/data/modal';

export const modalConfigBuilder = (type: ModalType, variant: ModalVariant, title?: string,  views?: View[], permission?: string, component?: React.ComponentType<any>): Modal => {
  return { type, variant, title, views, permission, modalComponent: component };
}

export const viewConfigBuilder = (view: string, title?: string, permission?: string): View => {
  return { view, title, permission };
}

export const ModalConfigFactory = (modalType: ModalType, modalConfigs: Modal[]): Modal | undefined => {
  const config = modalConfigs.find(modal => modal.type === modalType);
  return config;
}