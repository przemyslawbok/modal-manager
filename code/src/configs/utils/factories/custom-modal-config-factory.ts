import { ModalConfigFactory } from '@/contexts/use-modal';
import { ContentType, ModalVariant, Permission } from '@/data/enums';
import { CustomContentConfig } from '@/data/types';
import { CustomVariantConfigFactory } from './custom-variant-config-factory';

export const CustomContentConfigFactory: ModalConfigFactory<typeof ContentType, typeof ModalVariant, typeof Permission, CustomContentConfig> = (type, variant, title, permission, views, modal) => {
  return { type, variant: CustomVariantConfigFactory(variant), title, permission, content: modal, views };
}