import { Modal } from '@/components/common/modal';
import { useModalContext } from '@/contexts/use-modal';
import { FC } from 'react';

export const EditModal: FC = () => {
  const { title, isEditOpen } = useModalContext();

  return (
    <Modal title={title} isOpen={isEditOpen}>
      Edit modal
    </Modal>
  );
};
