import { ContentType, ModalVariant, Permission } from '@/data/enums';
import { CustomContentConfig, CustomPageConfig } from '@/data/types';
import { CustomContentConfigFactory, CustomPageConfigFactory, } from './utils';
import { DevelopmentsModal, EditModal, InspirationModal } from '@/components/modal-manager/modals';

const editModalConfig: CustomContentConfig = CustomContentConfigFactory(ContentType.Edit, ModalVariant.Centered, "Edit Modal", undefined, undefined, EditModal);

const developmentsModalConfig: CustomContentConfig = CustomContentConfigFactory(ContentType.Developments, ModalVariant.Bottom, "Developments Modal", Permission.ViewDevelopments, undefined, DevelopmentsModal);

const inspirationModalConfig: CustomContentConfig = CustomContentConfigFactory(ContentType.Inspiration, ModalVariant.Right, undefined, Permission.ViewInspiration, [ContentType.InspirationView, ContentType.MoodboardsView, ContentType.ResourcesView], InspirationModal);

const inspirationViewConfig: CustomContentConfig = CustomContentConfigFactory(ContentType.InspirationView, ModalVariant.Right, "Inspiration View");
const moodboardsViewConfig: CustomContentConfig = CustomContentConfigFactory(ContentType.MoodboardsView, ModalVariant.Right, "Moodboards View", Permission.AddMoodboards);
const resourcesViewConfig: CustomContentConfig = CustomContentConfigFactory(ContentType.ResourcesView, ModalVariant.Right, "Resources View", Permission.AddResources);

export const contentsConfigs: CustomContentConfig[] = [editModalConfig, developmentsModalConfig, inspirationModalConfig, inspirationViewConfig, moodboardsViewConfig, resourcesViewConfig];

export const pageConfig: CustomPageConfig = CustomPageConfigFactory([ContentType.Edit, ContentType.Developments, ContentType.Inspiration, ContentType.InspirationView, ContentType.MoodboardsView, ContentType.ResourcesView], contentsConfigs);
export const restrictedPageConfig: CustomPageConfig = CustomPageConfigFactory([ContentType.Developments, ContentType.Inspiration, ContentType.InspirationView, ContentType.MoodboardsView, ContentType.ResourcesView], contentsConfigs);