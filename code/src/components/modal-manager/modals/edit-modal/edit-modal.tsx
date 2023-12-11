import { Modal } from '@/components/common/modal';
import { useModalContext } from '@/contexts/use-modal';
import { FC } from 'react';

export const EditModal: FC = () => {
  const { isEditOpen } = useModalContext();

  return (
    <Modal title='Edit modal' isOpen={isEditOpen}>
      Edit modal
    </Modal>
  );
};
