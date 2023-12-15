import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from '../../data/common';
import { ViewConfig } from '../../data';

export type ViewConfigFactory<T extends EnumObject, P extends EnumObject, C extends ViewConfig<T, P> > = (
  title: string,
  type: EnumKeys<T> | EnumValues<T>,
  permission?: EnumKeys<P> | EnumValues<P>,
  content?: ComponentType<any>,
  nextView?: ViewConfig<T, P>
) => C;