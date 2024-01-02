import { ContentConfig, PageConfig, VariantConfig } from './data';
import { ModalProvider, useModalContext } from './use-modal-context'
import { ModalConfigFactory, PageConfigFactory, VariantConfigFactory } from './utils';

export { ModalProvider, useModalContext };
export type { ContentConfig, VariantConfig, PageConfig }
export type { ModalConfigFactory, VariantConfigFactory, PageConfigFactory }