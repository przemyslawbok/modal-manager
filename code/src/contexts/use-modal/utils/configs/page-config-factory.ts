import { EnumObject, EnumKeys, EnumValues, PageConfig, ContentConfig } from '../../data'

export type PageConfigFactory<
  ContentType extends EnumObject, 
  Variant extends EnumObject, 
  Permission extends EnumObject,
  Result extends PageConfig<ContentType, Variant, Permission>
> = (
  contentTypes: EnumKeys<ContentType>[] | EnumValues<ContentType>[], 
  contentConfigs: ContentConfig<ContentType, Variant, Permission>[],
) => Result;