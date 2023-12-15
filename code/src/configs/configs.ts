import { ViewConfigFactory } from '@/contexts/use-modal';
import { ModalType, ModalVariant, ViewForInspiration, Permissions } from '@/data/enums';
import { CustomModalConfig, CustomModalWithViewsConfig, CustomViewConfig } from '@/data/types';

const modalConfig: CustomModalConfig = {
  type: ModalType.Inspiration,
  variant: {
    type: ModalVariant.Right,
  },
};
console.log(
  '%c 👩‍👦: Home -> modalConfig ',
  'font-size:16px;background-color:#f56705;color:white;',
  modalConfig
);

export const viewConfigFactory: ViewConfigFactory<typeof ViewForInspiration, typeof Permissions, CustomViewConfig> = (title, type, permission, content, nextView) => {
  return { title, type, permission, content, nextView };
}

const inspirationViewConfig: CustomViewConfig = viewConfigFactory("Inspiration Modal", ViewForInspiration.Inspiration, Permissions.ViewInspiration);
const addMoodboardsViewConfig: CustomViewConfig = viewConfigFactory("Add Moodboards Modal", ViewForInspiration.AddMoodboards, Permissions.AddMoodboards);
const addResourcesViewConfig: CustomViewConfig = viewConfigFactory("Add Resources Modal", ViewForInspiration.AddResources, Permissions.AddResources);

const modalWithViewsConfig: CustomModalWithViewsConfig = {
  type: ModalType.Inspiration,
  variant: {
    type: ModalVariant.Right,
  },
  views: [inspirationViewConfig],
  permission: Permissions.ViewInspiration,
};
console.log(
  '%c 🌼: Home -> modalWithViewsConfig ',
  'font-size:16px;background-color:#388752;color:white;',
  modalWithViewsConfig
);