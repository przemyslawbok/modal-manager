import { PageConfigFactory } from '@/contexts/use-modal';
import { ModalType, ModalVariant, Permissions, ViewForInspiration } from '@/data/enums';
import { CustomPageConfig } from '@/data/types';

export const CustomPageConfigFactory: PageConfigFactory<
typeof ModalType, 
typeof ModalVariant, 
typeof Permissions, 
typeof ViewForInspiration | undefined, 
CustomPageConfig
> = (modalTypes, modalsConfigs, modalsWithViewsConfigs) => {
  const result: CustomPageConfig = {
    modals: [],
    modalsWithViews: []
  }

  modalTypes.forEach(modalType => {
    const modalConfig = modalsConfigs.find(modalConfig => modalConfig.type === modalType)
    const modalWithViewsConfig = modalsWithViewsConfigs.find(modalConfig => modalConfig.type === modalType)

    if (!modalConfig && !modalWithViewsConfig) throw new Error(`Missing config for modal type: ${modalType}`)
    if (modalConfig && modalWithViewsConfig) throw new Error(`Multiple configs for modal type: ${modalType}`)

    if (modalConfig) {
      result.modals.push({ ...modalConfig })
    }

    if (modalWithViewsConfig) {
      result.modalsWithViews.push({ ...modalWithViewsConfig })
    }
  })

  return result;
}
