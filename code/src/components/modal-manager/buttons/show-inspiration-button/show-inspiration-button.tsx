import { useModalContext } from '@/app/use-modal/use-modal.context';
import { Button } from '@mui/material';
import { FC } from 'react';

export const ShowInspirationButton: FC = () => {
  const { showInspiration } = useModalContext();

  return <Button onClick={showInspiration}>Show Inspiration</Button>;
};
