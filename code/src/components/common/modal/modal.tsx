import { FC, ReactNode } from 'react';
import { Header, StyledModal, Title } from './modal.styled';
import { ModalPicker } from './modal-picker';
import { useModalContext } from '@/contexts/use-modal';
import { BackButton } from '../back-button';
import { CloseButton } from '../close-button';

type ModalProps = {
  title?: string;
  isOpen: boolean;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = (props) => {
  const { title, isOpen, children } = props;
  const { modalVariant, resetModal } = useModalContext();

  return (
    <StyledModal
      variant={modalVariant}
      open={isOpen}
      onClose={resetModal}
      hideBackdrop
    >
      <ModalPicker>
        <Header>
          <BackButton />
          {title && (
            <Title id='modal-modal-title' variant='h6'>
              {title}
            </Title>
          )}
          <CloseButton />
        </Header>
        {children}
      </ModalPicker>
    </StyledModal>
  );
};
