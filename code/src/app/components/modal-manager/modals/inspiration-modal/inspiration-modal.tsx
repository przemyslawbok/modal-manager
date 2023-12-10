import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import { InspirationView } from './inspiration-view';
import { AddResourcesView } from './add-resources-view';
import { AddMoodboardsView } from './add-moodboards-view';

export const InspirationModal: FC = () => {
  const { isInspirationOpen } = useModalContext();

  if (!isInspirationOpen) return null;

  return (
    <>
      <InspirationView />
      <AddResourcesView />
      <AddMoodboardsView />
    </>
  );
};
