import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from '../../data/common';
import { ModalWithViewsConfig, ViewConfig } from '../../data';

export type ModalWithViewsConfigFactory<
  ModalType extends EnumObject, 
  Variant extends EnumObject, 
  ViewType extends EnumObject, 
  Permission extends EnumObject, 
  Result extends ModalWithViewsConfig<ModalType, Variant, ViewType, Permission>
> = (
  type: EnumKeys<ModalType> | EnumValues<ModalType>,
  variant: EnumKeys<Variant> | EnumValues<Variant>,
  views: ViewConfig<ViewType, Permission>[],
  title?: string,
  permission?: EnumKeys<Permission> | EnumValues<Permission>,
  modal?: ComponentType<any>,
) => Result;