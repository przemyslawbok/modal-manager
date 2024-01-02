import { ContentType, ModalVariant, Permission } from '@/data/enums';
import { modalConfigBuilder } from './utils/modal-config-factory';
import { DevelopmentsModal, EditModal, InspirationModal } from '@/components/modal-manager/modals';


const EditModalConfig = modalConfigBuilder(ContentType.Edit, ModalVariant.Centered, "Edit modal", undefined, undefined, 
  EditModal);

const DevelopmentsModalConfig = modalConfigBuilder(ContentType.Developments, ModalVariant.Bottom, "Developments modal", 
  undefined, Permission.ViewDevelopments, DevelopmentsModal);
const InspirationModalConfig = modalConfigBuilder(ContentType.Inspiration, ModalVariant.Right, "Inspiration modal", undefined, 
Permission.ViewInspiration, InspirationModal);

export const modalConfigs = [EditModalConfig, DevelopmentsModalConfig, InspirationModalConfig]