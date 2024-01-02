import { EnumObject } from '.';

export type ModalState<ModalType extends EnumObject, ViewType extends EnumObject> = {
  currentModal: ModalType;
  currentView: ViewType;
}