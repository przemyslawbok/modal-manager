import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import { InspirationView } from './inspiration-view';
import { AddResourcesView } from './add-resources-view';
import { AddMoodboardsView } from './add-moodboards-view';
import { Modal } from '@/app/components/common/modal';
import { InspirationViews } from '@/app/use-modal/data';

export const InspirationModal: FC = () => {
  const { title, currentView, isInspirationOpen, showInspiration } =
    useModalContext();

  if (!isInspirationOpen) return null;

  const onBackClick =
    currentView !== InspirationViews.Inspiration ? showInspiration : undefined;

  return (
    <>
      <Modal title={title} isOpen={isInspirationOpen} onBackClick={onBackClick}>
        <InspirationView />
        <AddResourcesView />
        <AddMoodboardsView />
      </Modal>
    </>
  );
};
