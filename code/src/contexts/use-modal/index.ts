import { ModalConfig, ModalWithViewsConfig, VariantConfig, ViewConfig } from './data';
import { ModalProvider, useModalContext } from './use-modal-context'
import { ModalConfigFactory, ModalWithViewsConfigFactory, PageConfigFactory, VariantConfigFactory, ViewConfigFactory } from './utils';

export { ModalProvider, useModalContext };
export type { ModalConfig, ViewConfig, VariantConfig, ModalWithViewsConfig }
export type { ModalConfigFactory, VariantConfigFactory, ModalWithViewsConfigFactory, ViewConfigFactory, PageConfigFactory }