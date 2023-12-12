import { ModalType, ModalVariant, ViewForInspiration, Permissions } from '@/data/enums';
import { modalConfigBuilder, viewConfigBuilder } from './utils/modal-config-factory';

const InspirationViewConfig = viewConfigBuilder(ViewForInspiration.Inspiration, "Inspiration modal");
const AddMoodboardsViewConfig = viewConfigBuilder(ViewForInspiration.AddMoodboards, "Add Moodboards modal", Permissions.AddMoodboards);
const AddResourcesViewConfig = viewConfigBuilder(ViewForInspiration.AddResources, "Add Resources modal", Permissions.AddResources);

const EditModalConfig = modalConfigBuilder(ModalType.Edit, ModalVariant.Centered, "Edit modal");
const DevelopmentsModalConfig = modalConfigBuilder(ModalType.Developments, ModalVariant.Bottom, "Developments modal", undefined, Permissions.ViewDevelopments);
const InspirationModalConfig = modalConfigBuilder(ModalType.Inspiration, ModalVariant.Right, undefined, [InspirationViewConfig, AddMoodboardsViewConfig, AddResourcesViewConfig], Permissions.ViewInspiration);

export const modalConfigs = [EditModalConfig, DevelopmentsModalConfig, InspirationModalConfig]