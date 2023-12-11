import { useModalContext } from '@/contexts/use-modal';
import { Button } from '@mui/material';
import { FC } from 'react';

export const AddResourcesButton: FC = () => {
  const { showAddResources } = useModalContext();

  return <Button onClick={showAddResources}>Add</Button>;
};
