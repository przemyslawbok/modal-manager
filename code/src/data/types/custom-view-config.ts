import { ViewConfig } from '@/contexts/use-modal';
import { ViewForInspiration, Permissions } from '../enums';

export type CustomViewConfig = ViewConfig<typeof ViewForInspiration, typeof Permissions>;