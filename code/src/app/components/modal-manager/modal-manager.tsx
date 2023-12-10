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
import { PAGE_CONFIG } from '@/app/use-modal/configs/pageConfig';

export const ModalManager: FC = () => {
  return (
    <ModalProvider config={PAGE_CONFIG}>
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
