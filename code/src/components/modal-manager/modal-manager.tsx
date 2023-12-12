import { FC } from 'react';
import { DevelopmentsModal, EditModal, InspirationModal } from './modals';
import {
  EditButton,
  ShowDevelopmentsButton,
  ShowInspirationButton,
} from './buttons';
import { ModalProvider } from '@/contexts/use-modal';
import { Modal } from '@/data/modal';
import { Content } from './modal-manager.styled';
import { UserSelect } from '../user-select/user-select';
import { useUserContext } from '@/contexts/use-user';

type ModalManagerProps = {
  config: Modal[];
};

export const ModalManager: FC<ModalManagerProps> = ({ config }) => {
  const { user } = useUserContext();

  return (
    <ModalProvider configs={config} user={user}>
      <Content>
        <EditButton />
        <ShowInspirationButton />
        <ShowDevelopmentsButton />
        <EditModal />
        <InspirationModal />
        <DevelopmentsModal />
        <UserSelect />
      </Content>
    </ModalProvider>
  );
};
