import { useModalContext } from '@/contexts/use-modal';
import { Button } from '@mui/material';
import { FC } from 'react';

export const ShowInspirationButton: FC = () => {
  const { showInspiration } = useModalContext();

  return <Button onClick={showInspiration}>Show Inspiration</Button>;
};
