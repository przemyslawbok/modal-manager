import { FC } from 'react';
import { DevelopmentsModal, EditModal, InspirationModal } from './modals';
import {
  EditButton,
  ShowDevelopmentsButton,
  ShowInspirationButton,
} from './buttons';
import { ModalProvider } from '@/contexts/use-modal';
import { HOME_PAGE_CONFIG } from '@/configs/pageConfig';

export const ModalManager: FC = () => {
  return (
    <ModalProvider configs={HOME_PAGE_CONFIG}>
      <EditButton />
      <ShowInspirationButton />
      <ShowDevelopmentsButton />
      <EditModal />
      <InspirationModal />
      <DevelopmentsModal />
    </ModalProvider>
  );
};
