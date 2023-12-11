import { useModalContext } from '@/contexts/use-modal';
import { Button } from '@mui/material';
import { FC } from 'react';

export const ShowDevelopmentsButton: FC = () => {
  const { showDevelopments } = useModalContext();

  return <Button onClick={showDevelopments}>Show Developments</Button>;
};
