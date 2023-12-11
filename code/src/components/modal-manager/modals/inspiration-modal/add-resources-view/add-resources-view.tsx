import { useModalContext } from '@/contexts/use-modal';
import { ViewForInspiration } from '@/data/enums';
import { FC } from 'react';

export const AddResourcesView: FC = () => {
  const { currentView } = useModalContext();

  const isAddResourcesViewOpen =
    currentView === ViewForInspiration.AddResources;

  if (!isAddResourcesViewOpen) return null;

  return <>Add Resources modal</>;
};
