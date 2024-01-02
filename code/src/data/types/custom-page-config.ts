import { PageConfig } from '@/contexts/use-modal';
import { ContentType, ModalVariant, Permission } from '../enums';

export type CustomPageConfig = PageConfig<typeof ContentType, typeof ModalVariant, typeof Permission>;