import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from './common';
import { VariantConfig } from './variant-config';

export type ModalConfig<
  ModalType extends EnumObject, 
  Variant extends EnumObject, 
  Permissions extends EnumObject
> = {
  type: EnumKeys<ModalType> | EnumValues<ModalType>;
  variant: VariantConfig<Variant>;
  title?: string;
  permission?: EnumKeys<Permissions> | EnumValues<Permissions>;
  modal?: ComponentType<any>
}