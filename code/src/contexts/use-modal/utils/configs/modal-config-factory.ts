import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from '../../data/common';
import { ModalConfig } from '../../data';

export type ModalConfigFactory<
  Type extends EnumObject, 
  Variant extends EnumObject, 
  Permission extends EnumObject, 
  Result extends ModalConfig<Type, Variant, Permission>
> = (
  type: EnumKeys<Type> | EnumValues<Type>,
  variant: EnumKeys<Variant> | EnumValues<Variant>,
  title?: string,
  permission?: EnumKeys<Permission> | EnumValues<Permission>,
  modal?: ComponentType<any>,
) => Result;