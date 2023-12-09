import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC, ReactNode } from 'react';
import {
  Header,
  CenteredModalBox,
  StyledContentBox,
  CenteredModal,
  Title,
} from './modal.styled';
import { BackButton } from '@/app/components/back-button';
import { CloseButton } from '../../close-button/close-button';

type ModalProps = {
  buttonText: string;
  title: string;
  isOpen: boolean;
  onBackClick?: () => void;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = (props) => {
  const { title, isOpen, onBackClick, children } = props;
  const { resetModal } = useModalContext();

  return (
    <CenteredModal
      open={isOpen}
      onClose={resetModal}
      hideBackdrop
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <CenteredModalBox>
        <Header>
          {onBackClick && <BackButton onClick={onBackClick} />}
          <Title id='modal-modal-title' variant='h6'>
            {title}
          </Title>
          <CloseButton />
        </Header>
        <StyledContentBox>{children}</StyledContentBox>
      </CenteredModalBox>
    </CenteredModal>
  );
};
