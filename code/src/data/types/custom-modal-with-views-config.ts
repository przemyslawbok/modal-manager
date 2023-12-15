import { ModalWithViewsConfig } from '@/contexts/use-modal';
import { ModalType, ModalVariant, ViewForInspiration, Permissions } from '../enums';

export type CustomModalWithViewsConfig = ModalWithViewsConfig<
  typeof ModalType,
  typeof ModalVariant,
  typeof Permissions,
  typeof ViewForInspiration | undefined
>;