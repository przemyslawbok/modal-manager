import { PageConfigFactory } from '@/contexts/use-modal';
import { ModalType, ModalVariant, Permissions } from '@/data/enums';
import { CustomModalConfig, CustomModalWithViewsConfig } from '@/data/types';

export const CustomPageConfigFactory: PageConfigFactory<typeof ModalType, typeof ModalVariant, typeof Permissions, (CustomModalConfig | CustomModalWithViewsConfig)[]> = (modalTypes, modalConfigs) => {
  const configs: (CustomModalConfig | CustomModalWithViewsConfig)[] = []

  modalTypes.forEach(modalType => {
    const config = modalConfigs.find(modalConfig => modalConfig.type === modalType)
    
    if (!config) throw new Error(`Missing config for modal type: ${modalType}`)

    configs.push(config)
  })

  return configs;
}