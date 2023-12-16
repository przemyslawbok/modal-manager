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
import { HOME_PAGE_CONFIG } from '@/configs/pageConfig';

type ModalManagerProps = {
  config: CustomPageConfig;
};

export const ModalManager: FC<ModalManagerProps> = ({ config }) => {
  const { user } = useUserContext();

  //TODO: replace HOME_PAGE_CONFIG with config

  return (
    <ModalProvider configs={HOME_PAGE_CONFIG} user={user}>
      <Content>
        <EditButton />
        <ShowInspirationButton />
        <ShowDevelopmentsButton />
        <UserSelect />
      </Content>
    </ModalProvider>
  );
};
