import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from './common';

export type ViewConfig<C extends EnumObject, P extends EnumObject> = {
  title: string,
  type: EnumKeys<C> | EnumValues<C>;
  content?: ComponentType<any>,
  permission?: EnumKeys<P> | EnumValues<P>;
  nextView?: ViewConfig<C, P>;
}