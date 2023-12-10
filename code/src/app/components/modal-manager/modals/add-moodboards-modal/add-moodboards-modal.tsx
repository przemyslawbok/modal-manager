import { Modal } from '@/app/components/common/modal';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const AddMoodboardsModal: FC = () => {
  const { isAddMoodboardsOpen, showInspiration } = useModalContext();

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
