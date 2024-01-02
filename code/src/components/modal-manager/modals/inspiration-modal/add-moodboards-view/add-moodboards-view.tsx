import { useModalContext } from '@/contexts/use-modal';
import { FC } from 'react';

export const AddMoodboardsView: FC = () => {
  const { currentView } = useModalContext();

  return <>Add Moodboards modal</>;
};
