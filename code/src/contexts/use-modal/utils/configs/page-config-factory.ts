import { EnumObject, EnumKeys, EnumValues, ModalConfig, PageConfig, ModalWithViewsConfig } from '../../data'

export type PageConfigFactory<
  ModalType extends EnumObject, 
  Variant extends EnumObject, 
  Permissions extends EnumObject,
  ViewType extends EnumObject | undefined,
  Result extends PageConfig<ModalType, Variant, Permissions, ViewType>
> = (
  modalTypes: EnumKeys<ModalType>[] | EnumValues<ModalType>[], 
  modalsConfigs: ModalConfig<ModalType, Variant, Permissions>[],
  modalsWithViewsConfigs: ModalWithViewsConfig<ModalType, Variant, Permissions, ViewType>[]
) => Result;