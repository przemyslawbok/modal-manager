import { ModalParams, ModalType } from '../data';

export const getParamsObject = (modalType: ModalType, configs: ModalParams[], currentView?: string) => {
  const config = configs.find(({type}) => type === modalType) ?? {}
  return { ...config, currentView: currentView};
}