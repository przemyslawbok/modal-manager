import { EnumObject } from './common';
import { ModalConfig } from './modal-config';
import { ViewConfig } from './view-config';

export type ModalWithViewsConfig<T extends EnumObject, V extends EnumObject, C extends EnumObject, P extends EnumObject> = ModalConfig<T, V, P> & {
  views: ViewConfig<C, P>[];
}