import { FC, ReactNode } from 'react';
import { Header, StyledContentBox, StyledModal, Title } from './modal.styled';
import { BackButton } from '@/app/components/common/back-button';
import { CloseButton } from '@/app/components/common/close-button';
import { ModalPicker } from './modal-picker';
import { useModalContext } from '@/app/use-modal';

type ModalProps = {
  title: string;
  isOpen: boolean;
  onBackClick?: () => void;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = (props) => {
  const { title, isOpen, onBackClick, children } = props;
  const { modalVariant, resetModal } = useModalContext();

  return (
    <StyledModal
      open={isOpen}
      variant={modalVariant}
      onClose={resetModal}
      hideBackdrop
    >
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
    </StyledModal>
  );
};
