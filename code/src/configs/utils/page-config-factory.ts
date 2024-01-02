import { ContentType } from '@/data/enums'
import { ModalConfigFactory } from './modal-config-factory'
import { ModalConfig } from '@/data/modal'

export const PageConfigFactory = (contentTypes: ContentType[], modalConfigs: ModalConfig[]) => {
  const configs: ModalConfig[] = []

  contentTypes.forEach(contentType => {
    const config = ModalConfigFactory(contentType, modalConfigs)
    if (config) configs.push(config)
  })

  return configs;
}