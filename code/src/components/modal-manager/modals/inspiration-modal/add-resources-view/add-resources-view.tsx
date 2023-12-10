import { InspirationViews } from '@/app/use-modal/data';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const AddResourcesView: FC = () => {
  const { currentView } = useModalContext();

  const isAddResourcesViewOpen = currentView === InspirationViews.AddResources;

  if (!isAddResourcesViewOpen) return null;

  return <>Add Resources modal</>;
};
