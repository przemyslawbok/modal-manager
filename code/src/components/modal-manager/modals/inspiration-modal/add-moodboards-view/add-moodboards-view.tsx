import { useModalContext } from '@/contexts/use-modal';
import { ViewForInspiration } from '@/data/enums';
import { FC } from 'react';

export const AddMoodboardsView: FC = () => {
  const { currentView } = useModalContext();

  const isAddMoodboardsOpen = currentView === ViewForInspiration.AddMoodboards;

  if (!isAddMoodboardsOpen) return null;

  return <>Add Moodboards modal</>;
};
