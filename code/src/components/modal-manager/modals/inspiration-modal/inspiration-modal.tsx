import { FC } from 'react';
import { InspirationView } from './inspiration-view';
import { AddResourcesView } from './add-resources-view';
import { AddMoodboardsView } from './add-moodboards-view';
import { useModalContext } from '@/contexts/use-modal';
import { Modal } from '@/components/common/modal';

export const InspirationModal: FC = () => {
  const { title, isInspirationOpen } = useModalContext();

  if (!isInspirationOpen) return null;

  return (
    <>
      <Modal title={title} isOpen={isInspirationOpen}>
        <InspirationView />
        <AddResourcesView />
        <AddMoodboardsView />
      </Modal>
    </>
  );
};
