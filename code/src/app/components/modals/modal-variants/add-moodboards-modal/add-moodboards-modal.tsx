import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import { Modal } from '@/app/components/modals/modal';

export const AddMoodboardsModal: FC = () => {
  const { isAddMoodboardsOpen, showInspiration } = useModalContext();

  return (
    <Modal
      buttonText='Open Add Moodboards modal'
      title='Add Moodboards modal'
      isOpen={isAddMoodboardsOpen}
      onBackClick={showInspiration}
    >
      Add Moodboards modal
    </Modal>
  );
};
