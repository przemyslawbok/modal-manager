import { ContentType, ModalVariant, Permission } from '@/data/enums';
import { CustomModalConfig, CustomPageConfig } from '@/data/types';
import { CustomModalConfigFactory, CustomPageConfigFactory, } from './utils';

const editModalConfig: CustomModalConfig = CustomModalConfigFactory(ContentType.Edit, ModalVariant.Centered, "Edit Modal");

const developmentsModalConfig: CustomModalConfig = CustomModalConfigFactory(ContentType.Developments, ModalVariant.Bottom, "Developments Modal", Permission.ViewDevelopments);
const inspirationModalConfig: CustomModalConfig = CustomModalConfigFactory(ContentType.Inspiration, ModalVariant.Right, "Inspiration Modal", Permission.ViewInspiration);
const moodboardsViewConfig: CustomModalConfig = CustomModalConfigFactory(ContentType.MoodboardsView, ModalVariant.Right, "Moodboards View", Permission.AddMoodboards);
const resourcesViewConfig: CustomModalConfig = CustomModalConfigFactory(ContentType.ResourcesView, ModalVariant.Right, "Resources View", Permission.AddResources);

export const modalsConfigs: CustomModalConfig[] = [editModalConfig, developmentsModalConfig, inspirationModalConfig, moodboardsViewConfig, resourcesViewConfig];

export const pageConfig: CustomPageConfig = CustomPageConfigFactory([ContentType.Edit, ContentType.Developments, ContentType.Inspiration], modalsConfigs);
export const restrictedPageConfig: CustomPageConfig = CustomPageConfigFactory([ContentType.Developments, ContentType.Inspiration], modalsConfigs);