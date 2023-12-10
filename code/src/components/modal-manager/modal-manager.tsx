import { FC } from 'react';
import { DevelopmentsModal, EditModal, InspirationModal } from './modals';
import {
  EditButton,
  ShowDevelopmentsButton,
  ShowInspirationButton,
} from './buttons';
import { ModalProvider } from '@/contexts/use-modal';
import { PAGE_CONFIG } from '@/contexts/use-modal/configs/pageConfig';

export const ModalManager: FC = () => {
  return (
    <ModalProvider configs={PAGE_CONFIG}>
      <EditButton />
      <ShowInspirationButton />
      <ShowDevelopmentsButton />
      <EditModal />
      <InspirationModal />
      <DevelopmentsModal />
    </ModalProvider>
  );
};
