import { ModalType } from '@/data/enums'
import { ModalConfigFactory } from './modal-config-factory'
import { ModalConfig } from '@/data/modal'

export const PageConfigFactory = (modalTypes: ModalType[], modalConfigs: ModalConfig[]) => {
  const configs: ModalConfig[] = []

  modalTypes.forEach(modalType => {
    const config = ModalConfigFactory(modalType, modalConfigs)
    if (config) configs.push(config)
  })

  return configs;
}