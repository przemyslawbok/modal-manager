import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from '../../data/common';
import { ViewConfig } from '../../data';

export type ViewConfigFactory<
  Type extends EnumObject, 
  Permission extends EnumObject, 
  Content extends ViewConfig<Type, Permission>
> = (
  title: string,
  type: EnumKeys<Type> | EnumValues<Type>,
  permission?: EnumKeys<Permission> | EnumValues<Permission>,
  content?: ComponentType<any>,
  nextView?: ViewConfig<Type, Permission>
) => Content;