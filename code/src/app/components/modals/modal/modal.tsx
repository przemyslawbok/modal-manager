import { useModalContext } from '@/app/use-modal/use-modal.context';
import { Button } from '@mui/material';
import { FC, ReactNode } from 'react';
import {
  Header,
  StyledBox,
  StyledContentBox,
  StyledModal,
  Title,
} from './modal.styled';
import { BackButton } from '@/app/components/back-button';
import { CloseButton } from '../../close-button/close-button';

type ModalProps = {
  buttonText: string;
  title: string;
  isOpen: boolean;
  onShowClick: () => void;
  onBackClick?: () => void;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = (props) => {
  const { buttonText, title, isOpen, onShowClick, onBackClick, children } =
    props;
  const { resetModal } = useModalContext();

  return (
    <>
      <Button onClick={onShowClick}>{buttonText}</Button>
      <StyledModal
        open={isOpen}
        onClose={resetModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <StyledBox>
          <Header>
            {onBackClick && <BackButton onClick={onBackClick} />}
            <Title id='modal-modal-title' variant='h6'>
              {title}
            </Title>
            <CloseButton />
          </Header>
          <StyledContentBox>{children}</StyledContentBox>
        </StyledBox>
      </StyledModal>
    </>
  );
};
