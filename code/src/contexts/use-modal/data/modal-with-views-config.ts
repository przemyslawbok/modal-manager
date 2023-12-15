import { EnumObject } from './common';
import { ModalConfig } from './modal-config';
import { ViewConfig } from './view-config';

export type ModalWithViewsConfig<
  ModalType extends EnumObject, 
  Variant extends EnumObject, 
  Permission extends EnumObject,
  ViewType extends EnumObject | undefined, 
> = 
ModalConfig<ModalType, Variant, Permission> & 
{
  views: ViewConfig<ViewType, Permission>[];
}