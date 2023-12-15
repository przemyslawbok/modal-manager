import { ViewConfigFactory } from '@/contexts/use-modal';
import { ViewForInspiration, Permissions } from '@/data/enums';
import { CustomViewConfig } from '@/data/types';

export const CustomViewConfigFactory: ViewConfigFactory<typeof ViewForInspiration, typeof Permissions, CustomViewConfig> = (title, type, permission, content, nextView) => {
  return { title, type, permission, content, nextView };
}