import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import { Modal } from '@/app/components/modals/modal';

export const EditModal: FC = () => {
  const { isEditOpen } = useModalContext();

  return (
    <Modal buttonText='Open edit modal' title='Edit modal' isOpen={isEditOpen}>
      Edit modal
    </Modal>
  );
};
