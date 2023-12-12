import { FC } from 'react';
import {
  EditButton,
  ShowDevelopmentsButton,
  ShowInspirationButton,
} from './buttons';
import { ModalProvider } from '@/contexts/use-modal';
import { ModalConfig } from '@/data/modal';
import { Content } from './modal-manager.styled';
import { UserSelect } from '../user-select/user-select';
import { useUserContext } from '@/contexts/use-user';

type ModalManagerProps = {
  config: ModalConfig[];
};

export const ModalManager: FC<ModalManagerProps> = ({ config }) => {
  const { user } = useUserContext();

  return (
    <ModalProvider configs={config} user={user}>
      <Content>
        <EditButton />
        <ShowInspirationButton />
        <ShowDevelopmentsButton />
        <UserSelect />
      </Content>
    </ModalProvider>
  );
};
