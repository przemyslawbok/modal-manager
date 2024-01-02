import { EnumObject, EnumKeys, EnumValues, ModalConfig, PageConfig } from '../../data'

export type PageConfigFactory<
  ModalType extends EnumObject, 
  Variant extends EnumObject, 
  Permission extends EnumObject,
  Result extends PageConfig<ModalType, Variant, Permission>
> = (
  modalTypes: EnumKeys<ModalType>[] | EnumValues<ModalType>[], 
  modalsConfigs: ModalConfig<ModalType, Variant, Permission>[],
) => Result;