import { ModalType, ModalVariant } from '@/data/enums';
import { Modal, View } from '@/data/modal';

export const modalConfigBuilder = (type: ModalType, variant: ModalVariant, title?: string,  views?: View[]): Modal => {
  return { type, variant, title, views };
}

export const viewConfigBuilder = (view: string, variant: ModalVariant, title?: string,): View => {
  return { view, variant, title };
}

export const ModalConfigFactory = (modalType: ModalType, modalConfigs: Modal[]): Modal | undefined => {
  const config = modalConfigs.find(modal => modal.type === modalType);
  return config;
}