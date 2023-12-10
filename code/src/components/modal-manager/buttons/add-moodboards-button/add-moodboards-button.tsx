import { useModalContext } from '@/app/use-modal/use-modal.context';
import { Button } from '@mui/material';
import { FC } from 'react';

export const AddMoodboardsButton: FC = () => {
  const { showAddMoodboards } = useModalContext();

  return <Button onClick={showAddMoodboards}>Add</Button>;
};
