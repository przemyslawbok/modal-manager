import { Modal } from '@/app/components/common/modal';
import { InspirationViews } from '@/app/use-modal/data';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const AddMoodboardsView: FC = () => {
  const { currentView, showInspiration } = useModalContext();

  const isAddMoodboardsOpen = currentView === InspirationViews.AddMoodboards;

  return (
    <Modal
      title='Add Moodboards modal'
      isOpen={isAddMoodboardsOpen}
      onBackClick={showInspiration}
    >
      Add Moodboards modal
    </Modal>
  );
};
