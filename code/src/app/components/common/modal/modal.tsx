import { FC, ReactNode } from 'react';
import { Header, StyledContentBox, Title } from './modal.styled';
import { BackButton } from '@/app/components/common/back-button';
import { CloseButton } from '@/app/components/common/close-button';
import { ModalPicker } from './modal-picker';

type ModalProps = {
  title: string;
  isOpen: boolean;
  onBackClick?: () => void;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = (props) => {
  const { title, isOpen, onBackClick, children } = props;

  return (
    <ModalPicker isOpen={isOpen}>
      <Header>
        {onBackClick && <BackButton onClick={onBackClick} />}
        <Title id='modal-modal-title' variant='h6'>
          {title}
        </Title>
        <CloseButton />
      </Header>
      <StyledContentBox>{children}</StyledContentBox>
    </ModalPicker>
  );
};
