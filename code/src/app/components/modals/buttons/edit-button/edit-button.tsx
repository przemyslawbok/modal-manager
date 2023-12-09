import { useModalContext } from '@/app/use-modal/use-modal.context';
import { Button } from '@mui/material';
import { FC } from 'react';

export const EditButton: FC = () => {
  const { showEdit } = useModalContext();

  return <Button onClick={showEdit}>Edit</Button>;
};
