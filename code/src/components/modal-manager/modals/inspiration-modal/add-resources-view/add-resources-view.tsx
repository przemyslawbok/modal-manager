import { useModalContext } from '@/contexts/use-modal';
import { FC } from 'react';

export const AddResourcesView: FC = () => {
  const { currentView } = useModalContext();

  return <>Add Resources modal</>;
};
