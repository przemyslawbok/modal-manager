import { FC } from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { useModalContext } from '@/contexts/use-modal';

export const CloseButton: FC = () => {
  const { resetModal } = useModalContext();

  return (
    <IconButton onClick={resetModal}>
      <Image src='/icons/close.svg' alt='Close' width={24} height={24} />
    </IconButton>
  );
};
