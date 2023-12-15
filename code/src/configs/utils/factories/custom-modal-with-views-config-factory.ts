import { ModalWithViewsConfigFactory } from '@/contexts/use-modal';
import { ModalType, ModalVariant, ViewForInspiration, Permissions } from '@/data/enums';
import { CustomVariantConfigFactory } from './custom-variant-config-factory';
import { CustomModalWithViewsConfig } from '@/data/types';

export const CustomModalWithViewsConfigFactory: ModalWithViewsConfigFactory<typeof ModalType, typeof ModalVariant, typeof ViewForInspiration, typeof Permissions, CustomModalWithViewsConfig> = (type, variant, views, title, permission, modal) => {
  return { type, variant: CustomVariantConfigFactory(variant), views, title, permission, modal };
}
