import { PageConfigFactory } from '@/contexts/use-modal';
import { ContentType, ModalVariant, Permission } from '@/data/enums';
import { CustomPageConfig } from '@/data/types';

export const CustomPageConfigFactory: PageConfigFactory<
typeof ContentType, 
typeof ModalVariant, 
typeof Permission, 
CustomPageConfig
> = (contentTypes, contentConfigs) => {
  const result: CustomPageConfig = {
    contents: [],
  }

  contentTypes.forEach(contentType => {
    const contentConfig = contentConfigs.find(contentConfig => contentConfig.type === contentType)

    if (!contentConfig) throw new Error(`Missing config for content type: ${contentType}`)

    if (contentConfig) {
      result.contents.push({ ...contentConfig })
    }
  })

  return result;
}
