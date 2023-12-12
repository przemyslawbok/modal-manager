import { ModalType, ModalVariant, ViewForInspiration, Permissions } from '@/data/enums';
import { modalConfigBuilder, viewConfigBuilder } from './utils/modal-config-factory';
import { CreateModal, DevelopmentsModal, EditModal, InspirationModal } from '@/components/modal-manager/modals';

const InspirationViewConfig = viewConfigBuilder(ViewForInspiration.Inspiration, "Inspiration modal");
const AddMoodboardsViewConfig = viewConfigBuilder(ViewForInspiration.AddMoodboards, "Add Moodboards modal", Permissions.AddMoodboards);
const AddResourcesViewConfig = viewConfigBuilder(ViewForInspiration.AddResources, "Add Resources modal", Permissions.AddResources);

const CreateModalConfig = modalConfigBuilder(ModalType.Create, ModalVariant.Centered, "Create modal", undefined, Permissions.Create, 
  CreateModal);

const EditModalConfig = modalConfigBuilder(ModalType.Edit, ModalVariant.Centered, "Edit modal", undefined, undefined, 
  EditModal);

const DevelopmentsModalConfig = modalConfigBuilder(ModalType.Developments, ModalVariant.Bottom, "Developments modal", 
  undefined, Permissions.ViewDevelopments, DevelopmentsModal);

const InspirationModalConfig = modalConfigBuilder(ModalType.Inspiration, ModalVariant.Right, undefined, 
  [InspirationViewConfig, AddMoodboardsViewConfig, AddResourcesViewConfig], Permissions.ViewInspiration, InspirationModal);

export const modalConfigs = [EditModalConfig, DevelopmentsModalConfig, InspirationModalConfig, CreateModalConfig]