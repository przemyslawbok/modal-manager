import { EnumObject } from './common';
import { ContentConfig } from './modal-config';

export type PageConfig<
  ContentType extends EnumObject, 
  Variant extends EnumObject, 
  Permission extends EnumObject,
> = {
  contents: ContentConfig<ContentType, Variant, Permission>[];
};