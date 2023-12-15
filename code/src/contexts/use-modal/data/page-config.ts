import { EnumObject } from './common';
import { ModalConfig } from './modal-config';
import { ModalWithViewsConfig } from './modal-with-views-config';

export type PageConfig<
  ModalType extends EnumObject, 
  Variant extends EnumObject, 
  Permissions extends EnumObject,
  ViewType extends EnumObject | undefined,
> = {
  modals: ModalConfig<ModalType, Variant, Permissions>[];
  modalsWithViews: ModalWithViewsConfig<ModalType, Variant, Permissions, ViewType>[];
};