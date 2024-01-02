import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from '../../data/common';
import { ModalConfig } from '../../data';

export type ModalConfigFactory<
  ContentType extends EnumObject, 
  Variant extends EnumObject, 
  Permission extends EnumObject, 
  Result extends ModalConfig<ContentType, Variant, Permission>
> = (
  type: EnumKeys<ContentType> | EnumValues<ContentType>,
  variant: EnumKeys<Variant> | EnumValues<Variant>,
  title?: string,
  permission?: EnumKeys<Permission> | EnumValues<Permission>,
  views?: EnumKeys<ContentType> | EnumValues<ContentType>[],
  modal?: ComponentType<any>,
) => Result;