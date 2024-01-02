import { ContentType } from '@/data/enums';
import { CustomContentConfig } from '@/data/types';
import { User } from '@/data/user';

export const getParamsObject = (modalType: ContentType, config: CustomContentConfig[], user?: User, viewType?: ContentType): CustomContentConfig => {
  const modalConfig = config.find(({type}) => type === modalType);
  
  if (!modalConfig) {
    throw new Error(`Missing config for ${modalType}`)
  }

  const viewConfig = config.find(({type}) => type === viewType);

  if (viewType && !viewConfig) {
    throw new Error(`Missing config for ${modalType}, view ${viewType}`);
  }

  const checkConfigPermission = !modalConfig.permission;
  const checkModalPermission = user?.permissions?.some(permission => permission === modalConfig.permission)
  const checkCurrentView = !viewType;
  const checkViewPermission = checkCurrentView || user?.permissions?.some(permission => permission === viewConfig?.permission)
  
  const allowAccess = checkConfigPermission || (checkModalPermission && checkViewPermission);

  if (!allowAccess) {
    throw new Error(`Missing permissions for ${modalType}`)
  }

  const viewTitle = viewType && viewConfig?.title;
  const defaultTitle = modalConfig.title;

  return { ...modalConfig, currentView: viewType, title:  viewTitle || defaultTitle };
}
