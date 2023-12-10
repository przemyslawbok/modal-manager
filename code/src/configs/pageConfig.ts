import { ModalType } from '@/data/enums';
import { PageConfigFactory } from './utils/page-config-factory';
import { modalConfigs } from './definitions';

export const HOME_PAGE_CONFIG = PageConfigFactory([ModalType.Edit, ModalType.Developments, ModalType.Inspiration], modalConfigs)