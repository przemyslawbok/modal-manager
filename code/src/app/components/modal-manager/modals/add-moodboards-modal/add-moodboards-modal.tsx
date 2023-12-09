import { Modal } from '@/app/components/common/modal';
import { ModalVariant } from '@/app/use-modal/data';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const AddMoodboardsModal: FC = () => {
  const { isAddMoodboardsOpen, showInspiration } = useModalContext();

  return (
    <Modal
      variant={ModalVariant.Right}
      title='Add Moodboards modal'
      isOpen={isAddMoodboardsOpen}
      onBackClick={showInspiration}
    >
      Add Moodboards modal
    </Modal>
  );
};
