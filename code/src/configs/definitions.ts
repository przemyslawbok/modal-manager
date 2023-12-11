import { ModalType, ModalVariant, ViewForInspiration } from '@/data/enums';
import { modalConfigBuilder, viewConfigBuilder } from './utils/modal-config-factory';

const InspirationViewConfig = viewConfigBuilder(ViewForInspiration.Inspiration, ModalVariant.Right, "Inspiration modal");
const AddMoodboardsViewConfig = viewConfigBuilder(ViewForInspiration.AddMoodboards, ModalVariant.Right, "AddMoodboards modal");
const AddResourcesViewConfig = viewConfigBuilder(ViewForInspiration.AddResources, ModalVariant.Right, "AddResources modal");

const EditModalConfig = modalConfigBuilder(ModalType.Edit, ModalVariant.Centered, "Edit modal");
const DevelopmentsModalConfig = modalConfigBuilder(ModalType.Developments, ModalVariant.Bottom, "Developments modal");
const InspirationModalConfig = modalConfigBuilder(ModalType.Inspiration, ModalVariant.Right, undefined, [InspirationViewConfig, AddMoodboardsViewConfig, AddResourcesViewConfig]);

export const modalConfigs = [EditModalConfig, DevelopmentsModalConfig, InspirationModalConfig]