import { Modal, ModalType } from '../../../data/data';

export const getParamsObject = (modalType: ModalType, configs: Modal[], currentView?: string) => {
  const config = configs.find(({type}) => type === modalType) ?? {};
  const viewTitle = currentView && config.views ? config.views.find(({view}) => view === currentView)?.title : undefined;
  const defaultTitle = config.views ? config.views[0].title : config.title;

  return { ...config, currentView, title: viewTitle || defaultTitle };
}