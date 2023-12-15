import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from './common';

export type ViewConfig<Type extends EnumObject | undefined, Permission extends EnumObject> = {
  title: string,
  type: EnumKeys<Type> | EnumValues<Type>;
  content?: ComponentType<any>,
  permission?: EnumKeys<Permission> | EnumValues<Permission>;
  nextView?: ViewConfig<Type, Permission>;
}