import { VariantConfigFactory } from '@/contexts/use-modal';
import { ModalVariant } from '@/data/enums';
import { CustomVariantConfig } from '@/data/types';

export const CustomVariantConfigFactory: VariantConfigFactory<typeof ModalVariant, CustomVariantConfig> = (type, contentWrapper) => {
  return { type, contentWrapper };
}