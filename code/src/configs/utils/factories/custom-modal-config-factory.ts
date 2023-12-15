import { ModalConfigFactory } from '@/contexts/use-modal';
import { ModalType, ModalVariant, Permissions } from '@/data/enums';
import { CustomModalConfig } from '@/data/types';
import { CustomVariantConfigFactory } from './custom-variant-config-factory';

export const CustomModalConfigFactory: ModalConfigFactory<typeof ModalType, typeof ModalVariant, typeof Permissions, CustomModalConfig> = (type, variant, title, permission, modal) => {
  return { type, variant: CustomVariantConfigFactory(variant), title, permission, modal };
}