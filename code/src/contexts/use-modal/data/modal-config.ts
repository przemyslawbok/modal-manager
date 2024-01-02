import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from './common';
import { VariantConfig } from './variant-config';

export type ContentConfig<
  ContentType extends EnumObject, 
  Variant extends EnumObject, 
  Permission extends EnumObject
> = {
  type: EnumKeys<ContentType> | EnumValues<ContentType>;
  variant: VariantConfig<Variant>;
  title?: string;
  permission?: EnumKeys<Permission> | EnumValues<Permission>;
  views?: EnumKeys<ContentType> | EnumValues<ContentType>[];
  content?: ComponentType<any>
}