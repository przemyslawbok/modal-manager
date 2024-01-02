import { EnumObject } from './common';
import { ModalConfig } from './modal-config';

export type PageConfig<
  ContentType extends EnumObject, 
  Variant extends EnumObject, 
  Permission extends EnumObject,
> = {
  contents: ModalConfig<ContentType, Variant, Permission>[];
};