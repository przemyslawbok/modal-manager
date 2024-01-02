import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from '../../data/common';
import { ContentConfig } from '../../data';

export type ContentConfigFactory<
  ContentType extends EnumObject, 
  Variant extends EnumObject, 
  Permission extends EnumObject, 
  Result extends ContentConfig<ContentType, Variant, Permission>
> = (
  type: EnumKeys<ContentType> | EnumValues<ContentType>,
  variant: EnumKeys<Variant> | EnumValues<Variant>,
  title?: string,
  permission?: EnumKeys<Permission> | EnumValues<Permission>,
  views?: EnumKeys<ContentType> | EnumValues<ContentType>[],
  content?: ComponentType<any>,
) => Result;