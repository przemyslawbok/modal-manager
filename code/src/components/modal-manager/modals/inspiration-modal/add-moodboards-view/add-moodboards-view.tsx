import { useModalContext } from '@/contexts/use-modal';
import { InspirationView } from '@/data/enums';
import { FC } from 'react';

export const AddMoodboardsView: FC = () => {
  const { currentView } = useModalContext();

  const isAddMoodboardsOpen = currentView === InspirationView.AddMoodboards;

  if (!isAddMoodboardsOpen) return null;

  return <>Add Moodboards modal</>;
};
