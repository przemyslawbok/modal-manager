import { ModalVariant } from '@/app/use-modal/data';
import { FC, ReactNode } from 'react';
import {
  BottomModal,
  BottomModalBox,
  CenteredModal,
  CenteredModalBox,
  RightModal,
  RightModalBox,
} from './modal-picker.styled';
import { useModalContext } from '@/app/use-modal';

type ModalPickerProps = {
  isOpen: boolean;
  variant: ModalVariant;
  children: ReactNode;
};

export const ModalPicker: FC<ModalPickerProps> = (props) => {
  const { isOpen, variant, children } = props;
  const { resetModal } = useModalContext();

  switch (variant) {
    case ModalVariant.Centered:
      return (
        <CenteredModal open={isOpen} onClose={resetModal} hideBackdrop>
          <CenteredModalBox>{children}</CenteredModalBox>
        </CenteredModal>
      );
    case ModalVariant.Bottom:
      return (
        <BottomModal open={isOpen} onClose={resetModal} hideBackdrop>
          <BottomModalBox>{children}</BottomModalBox>
        </BottomModal>
      );
    case ModalVariant.Right:
      return (
        <RightModal open={isOpen} onClose={resetModal} hideBackdrop>
          <RightModalBox>{children}</RightModalBox>
        </RightModal>
      );
    default:
      return null;
  }
};
