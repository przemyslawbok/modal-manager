import { ModalType } from '@/data/enums';
import { Modal } from '@/data/modal';
import { User } from '@/data/user';

export const getParamsObject = (modalType: ModalType, configs: Modal[], user?: User, currentView?: string) => {
  const modalConfig = configs.find(({type}) => type === modalType);
  
  if (!modalConfig) {
    throw new Error(`Missing config for ${modalType}`)
  }

  const viewConfig = modalConfig.views?.find(({view}) => view === currentView);

  if (currentView && !viewConfig) {
    throw new Error(`Missing config for ${modalType}, view ${currentView}`);
  }

  const checkConfigPermission = !modalConfig.permission;
  const checkModalPermission = user?.permissions?.some(permission => permission === modalConfig.permission)
  const checkCurrentView = !currentView;
  const checkDefaultView = modalConfig.views && modalConfig.views[0].view === currentView;
  const checkViewPermission = checkCurrentView || checkDefaultView || user?.permissions?.some(permission => permission === viewConfig?.permission)
  
  const allowAccess = checkConfigPermission || (checkModalPermission && checkViewPermission);

  if (!allowAccess) {
    throw new Error(`Missing permissions for ${modalType}`)
  }

  const viewTitle = currentView && modalConfig.views ? modalConfig.views.find(({view}) => view === currentView)?.title : undefined;
  const defaultTitle = modalConfig.views ? modalConfig.views[0].title : modalConfig.title;

  return { ...modalConfig, currentView, title: viewTitle || defaultTitle };
}
