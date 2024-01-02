import { ContentConfig } from '@/contexts/use-modal';
import { ContentType, ModalVariant, Permission } from '../enums';

export type CustomContentConfig = ContentConfig<typeof ContentType, typeof ModalVariant, typeof Permission>;