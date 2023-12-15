import { ModalConfig } from '@/contexts/use-modal';
import { ModalType, ModalVariant, Permissions } from '../enums';

export type CustomModalConfig = ModalConfig<typeof ModalType, typeof ModalVariant, typeof Permissions>;