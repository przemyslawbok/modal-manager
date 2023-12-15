import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from './common';
import { VariantConfig } from './variant-config';

export type ModalConfig<T extends EnumObject, V extends EnumObject, P extends EnumObject> = {
  title?: string;
  type: EnumKeys<T> | EnumValues<T>;
  variant: VariantConfig<V>;
  permission?: EnumKeys<P> | EnumValues<P>;
  modal?: ComponentType<any>
}