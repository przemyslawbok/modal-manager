import { Modal } from '@/app/components/common/modal';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const EditModal: FC = () => {
  const { isEditOpen } = useModalContext();

  return (
    <Modal buttonText='Open edit modal' title='Edit modal' isOpen={isEditOpen}>
      Edit modal
    </Modal>
  );
};
