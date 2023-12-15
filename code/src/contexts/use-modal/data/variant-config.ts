import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from './common'

export type VariantConfig<V extends EnumObject> = {
  type: EnumKeys<V> | EnumValues<V>;
  contentWrapper?: ComponentType<any>
}