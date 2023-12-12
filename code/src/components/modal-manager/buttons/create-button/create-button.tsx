import { useModalContext } from '@/contexts/use-modal';
import { Button } from '@mui/material';
import { FC } from 'react';

export const CreateButton: FC = () => {
  const { showCreate } = useModalContext();

  return <Button onClick={showCreate}>Create</Button>;
};
