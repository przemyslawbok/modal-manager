import { FC } from 'react';
import {
  EditButton,
  ShowDevelopmentsButton,
  ShowInspirationButton,
} from './buttons';
import { ModalProvider } from '@/contexts/use-modal';
import { Content } from './modal-manager.styled';
import { UserSelect } from '../user-select/user-select';
import { useUserContext } from '@/contexts/use-user';
import { CustomPageConfig } from '@/data/types';

type ModalManagerProps = {
  config: CustomPageConfig;
};

export const ModalManager: FC<ModalManagerProps> = ({ config }) => {
  const { user } = useUserContext();

  return (
    <ModalProvider config={config} user={user}>
      <Content>
        <EditButton />
        <ShowInspirationButton />
        <ShowDevelopmentsButton />
        <UserSelect />
      </Content>
    </ModalProvider>
  );
};
