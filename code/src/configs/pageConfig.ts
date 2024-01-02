import { ContentType } from '@/data/enums';
import { PageConfigFactory } from './utils/page-config-factory';
import { modalConfigs } from './definitions';

export const HOME_PAGE_CONFIG = PageConfigFactory([ContentType.Edit, ContentType.Developments, ContentType.Inspiration], modalConfigs)
export const RESTRICTED_PAGE_CONFIG = PageConfigFactory([ContentType.Developments, ContentType.Inspiration], modalConfigs)
