import { EnumObject, EnumKeys, EnumValues, ModalConfig } from '../../data'

export type PageConfigFactory<
  ModalType extends EnumObject, 
  Variant extends EnumObject, 
  Permissions extends EnumObject,
  Result extends ModalConfig<ModalType, Variant, Permissions>[]
> = (
  modalTypes: EnumKeys<ModalType>[] | EnumValues<ModalType>[], 
  modalConfigs: ModalConfig<ModalType, Variant, Permissions>[]
) => Result;