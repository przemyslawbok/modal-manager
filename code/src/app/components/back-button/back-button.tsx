import { FC } from 'react';
import Image from 'next/image';
import { IconButton } from '@mui/material';

type BackButtonProps = {
  onClick: () => void;
};

export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <Image src='/icons/back.svg' alt='Back' width={24} height={24} />
    </IconButton>
  );
};
