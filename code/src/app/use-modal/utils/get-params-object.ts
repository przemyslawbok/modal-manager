import { ModalParams, ModalType } from '../data';

export const getParamsObject = (modalType: ModalType, configs: ModalParams[]) => configs.find(({type}) => type === modalType) ?? {}