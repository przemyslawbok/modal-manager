import { FC } from 'react';
import {
  AddMoodboardsModal,
  AddResourcesModal,
  DevelopmentsModal,
  EditModal,
  InspirationModal,
} from './modal-variants';
import { ModalProvider } from '@/app/use-modal/use-modal.context';

export const Modals: FC = () => {
  return (
    <ModalProvider>
      <EditModal />
      <InspirationModal />
      <AddResourcesModal />
      <AddMoodboardsModal />
      <DevelopmentsModal />
    </ModalProvider>
  );
};
