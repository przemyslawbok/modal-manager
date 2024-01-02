import { ModalConfigFactory } from '@/contexts/use-modal';
import { ContentType, ModalVariant, Permission } from '@/data/enums';
import { CustomModalConfig } from '@/data/types';
import { CustomVariantConfigFactory } from './custom-variant-config-factory';

export const CustomModalConfigFactory: ModalConfigFactory<typeof ContentType, typeof ModalVariant, typeof Permission, CustomModalConfig> = (type, variant, title, permission, views, modal) => {
  return { type, variant: CustomVariantConfigFactory(variant), title, permission, modal, views };
}