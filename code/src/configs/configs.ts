import { ModalType, ModalVariant, ViewForInspiration, Permissions } from '@/data/enums';
import { CustomModalConfig, CustomModalWithViewsConfig, CustomPageConfig, CustomVariantConfig, CustomViewConfig } from '@/data/types';
import { CustomModalConfigFactory, CustomModalWithViewsConfigFactory, CustomPageConfigFactory, CustomVariantConfigFactory, CustomViewConfigFactory } from './utils';

export const variantConfig: CustomVariantConfig = CustomVariantConfigFactory(ModalVariant.Centered);

const editModalConfig: CustomModalConfig = CustomModalConfigFactory(ModalType.Edit, ModalVariant.Centered, "Edit Modal");

const developmentsModalConfig: CustomModalConfig = CustomModalConfigFactory(ModalType.Developments, ModalVariant.Bottom, "Developments Modal", Permissions.ViewDevelopments);

const inspirationViewConfig: CustomViewConfig = CustomViewConfigFactory("Inspiration Modal", ViewForInspiration.Inspiration, Permissions.ViewInspiration);
const addMoodboardsViewConfig: CustomViewConfig = CustomViewConfigFactory("Add Moodboards Modal", ViewForInspiration.AddMoodboards, Permissions.AddMoodboards);
const addResourcesViewConfig: CustomViewConfig = CustomViewConfigFactory("Add Resources Modal", ViewForInspiration.AddResources, Permissions.AddResources);
const inspirationModalConfig: CustomModalWithViewsConfig = CustomModalWithViewsConfigFactory(ModalType.Inspiration, ModalVariant.Right, [inspirationViewConfig, addMoodboardsViewConfig, addResourcesViewConfig])

export const modalsConfigs: CustomModalConfig[] = [editModalConfig, developmentsModalConfig];
export const modalsWithViewsConfigs: CustomModalWithViewsConfig[] = [inspirationModalConfig];

export const pageConfig: CustomPageConfig = CustomPageConfigFactory([ModalType.Edit, ModalType.Developments, ModalType.Inspiration], modalsConfigs, modalsWithViewsConfigs);
export const restrictedPageConfig: CustomPageConfig = CustomPageConfigFactory([ModalType.Developments, ModalType.Inspiration], modalsConfigs, modalsWithViewsConfigs);