import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import { Modal } from '@/app/components/modals/modal';

export const EditModal: FC = () => {
  const { isEditOpen, showEdit } = useModalContext();

  return (
    <Modal
      buttonText='Open edit modal'
      title='Edit modal'
      isOpen={isEditOpen}
      onShowClick={showEdit}
    >
      Edit modal
    </Modal>
  );
};
