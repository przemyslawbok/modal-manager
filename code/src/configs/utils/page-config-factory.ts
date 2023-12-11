import { ModalType } from '@/data/enums'
import { ModalConfigFactory } from './modal-config-factory'
import { Modal } from '@/data/modal'

export const PageConfigFactory = (modalTypes: ModalType[], modalConfigs: Modal[]) => {
  const configs: Modal[] = []

  modalTypes.forEach(modalType => {
    const config = ModalConfigFactory(modalType, modalConfigs)
    if (config) configs.push(config)
  })

  return configs;
}