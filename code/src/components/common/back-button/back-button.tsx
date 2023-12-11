import { FC } from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { useModalContext } from '@/contexts/use-modal';

export const BackButton: FC = () => {
  const { isBackButtonVisible, showInitialView } = useModalContext();

  if (!isBackButtonVisible) return null;

  return (
    <IconButton onClick={showInitialView}>
      <Image src='/icons/back.svg' alt='Back' width={24} height={24} />
    </IconButton>
  );
};
