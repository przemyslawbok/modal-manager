import { ContentType } from '@/data/enums';
import { Modal, ModalConfig } from '@/data/modal';
import { User } from '@/data/user';

export const getParamsObject = (modalType: ContentType, configs: ModalConfig[], user?: User, current?: ContentType): Modal => {
  const modalConfig = configs.find(({type}) => type === modalType);
  
  if (!modalConfig) {
    throw new Error(`Missing config for ${modalType}`)
  }

  const view = modalConfig.views?.find(view => view === current);
  const viewConfig = configs.find(({type}) => type === modalType);

  if (current && !viewConfig) {
    throw new Error(`Missing config for ${modalType}, view ${current}`);
  }

  const checkConfigPermission = !modalConfig.permission;
  const checkModalPermission = user?.permissions?.some(permission => permission === modalConfig.permission)
  const checkCurrentView = !current;
  const checkViewPermission = checkCurrentView || user?.permissions?.some(permission => permission === viewConfig?.permission)
  
  const allowAccess = checkConfigPermission || (checkModalPermission && checkViewPermission);

  if (!allowAccess) {
    throw new Error(`Missing permissions for ${modalType}`)
  }

  const viewTitle = current && viewConfig?.title;
  const defaultTitle = modalConfig.title;

  return { ...modalConfig, currentView: current, title:  viewTitle || defaultTitle };
}
