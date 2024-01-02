import { PageConfigFactory } from '@/contexts/use-modal';
import { ContentType, ModalVariant, Permission } from '@/data/enums';
import { CustomPageConfig } from '@/data/types';

export const CustomPageConfigFactory: PageConfigFactory<
typeof ContentType, 
typeof ModalVariant, 
typeof Permission, 
CustomPageConfig
> = (contentTypes, modalsConfigs) => {
  const result: CustomPageConfig = {
    contents: [],
  }

  contentTypes.forEach(contentType => {
    const modalConfig = modalsConfigs.find(modalConfig => modalConfig.type === contentType)

    if (!modalConfig) throw new Error(`Missing config for modal type: ${contentType}`)

    if (modalConfig) {
      result.contents.push({ ...modalConfig })
    }
  })

  return result;
}
