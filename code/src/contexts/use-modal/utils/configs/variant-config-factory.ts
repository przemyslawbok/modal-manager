import { ComponentType } from 'react';
import { EnumKeys, EnumObject, EnumValues } from '../../data/common';
import { VariantConfig } from '../../data';

export type VariantConfigFactory<Type extends EnumObject, Result extends VariantConfig<Type>> = (
  type: EnumKeys<Type> | EnumValues<Type>,
  contentWrapper?:  ComponentType<any>,
) => Result;