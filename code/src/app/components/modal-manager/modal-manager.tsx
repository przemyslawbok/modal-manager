import { FC } from 'react';
import {
  AddMoodboardsModal,
  AddResourcesModal,
  DevelopmentsModal,
  EditModal,
  InspirationModal,
} from './modals';
import { ModalProvider } from '@/app/use-modal/use-modal.context';
import {
  EditButton,
  ShowDevelopmentsButton,
  ShowInspirationButton,
} from './buttons';

export const ModalManager: FC = () => {
  return (
    <ModalProvider>
      <EditButton />
      <ShowInspirationButton />
      <ShowDevelopmentsButton />
      <EditModal />
      <InspirationModal />
      <DevelopmentsModal />
      <AddResourcesModal />
      <AddMoodboardsModal />
    </ModalProvider>
  );
};
