import { InspirationViews } from '@/app/use-modal/data';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const AddMoodboardsView: FC = () => {
  const { currentView } = useModalContext();

  const isAddMoodboardsOpen = currentView === InspirationViews.AddMoodboards;

  if (!isAddMoodboardsOpen) return null;

  return <>Add Moodboards modal</>;
};
