import { useModalContext } from '@/contexts/use-modal';
import { Button } from '@mui/material';
import { FC } from 'react';

export const EditButton: FC = () => {
  const { showEdit } = useModalContext();

  return <Button onClick={showEdit}>Edit</Button>;
};
