import { ModalVariant } from '@/app/use-modal/data';
import { FC, ReactNode } from 'react';
import {
  BottomModalBox,
  CenteredModalBox,
  RightModalBox,
} from './modal-picker.styled';
import { useModalContext } from '@/app/use-modal';

type ModalPickerProps = {
  isOpen: boolean;
  children: ReactNode;
};

export const ModalPicker: FC<ModalPickerProps> = (props) => {
  const { children } = props;
  const { modalVariant } = useModalContext();

  switch (modalVariant) {
    case ModalVariant.Centered:
      return <CenteredModalBox>{children}</CenteredModalBox>;
    case ModalVariant.Bottom:
      return <BottomModalBox>{children}</BottomModalBox>;
    case ModalVariant.Right:
      return <RightModalBox>{children}</RightModalBox>;
    default:
      return null;
  }
};
