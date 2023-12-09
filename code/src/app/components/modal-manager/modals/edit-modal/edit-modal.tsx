import { Modal } from '@/app/components/common/modal';
import { ModalVariant } from '@/app/use-modal/data';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const EditModal: FC = () => {
  const { isEditOpen } = useModalContext();

  return (
    <Modal
      variant={ModalVariant.Centered}
      title='Edit modal'
      isOpen={isEditOpen}
    >
      Edit modal
    </Modal>
  );
};
