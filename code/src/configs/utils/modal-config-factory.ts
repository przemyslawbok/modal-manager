import { ContentType, ModalVariant } from '@/data/enums';
import { Modal, ModalConfig } from '@/data/modal';

export const modalConfigBuilder = (type: ContentType, variant: ModalVariant, title?: string,  views?: ContentType[], permission?: string, component?: React.ComponentType<any>): ModalConfig => {
  return { type, variant, title, views, permission, modalComponent: component };
}

export const ModalConfigFactory = (contentType: ContentType, modalConfigs: Modal[]): Modal | undefined => {
  const config = modalConfigs.find(modal => modal.type === contentType);
  return config;
}