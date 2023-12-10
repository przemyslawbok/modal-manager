import { useModalContext } from '@/app/use-modal/use-modal.context';
import { Button } from '@mui/material';
import { FC } from 'react';

export const AddResourcesButton: FC = () => {
  const { showAddResources } = useModalContext();

  return <Button onClick={showAddResources}>Add</Button>;
};
