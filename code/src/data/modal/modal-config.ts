import { Modal } from './modal';

export interface ModalConfig extends Modal {
  permission?: string;
  modalComponent?: React.ComponentType<any>
}