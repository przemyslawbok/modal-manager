import { PageConfig } from '@/contexts/use-modal';
import { ModalType, ModalVariant, Permissions, ViewForInspiration } from '../enums';

export type CustomPageConfig = PageConfig<typeof ModalType, typeof ModalVariant, typeof Permissions, typeof ViewForInspiration | undefined>;