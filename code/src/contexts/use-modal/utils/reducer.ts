import { Modal } from '@/data/modal';
import { ModalState } from '../data/modal-state';

export const reducer = (state: ModalState, params: Modal): ModalState => {
  return { ...state, current: { ...params } };
};