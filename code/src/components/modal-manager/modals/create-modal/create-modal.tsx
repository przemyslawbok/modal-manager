import { Modal } from '@/components/common/modal';
import { useModalContext } from '@/contexts/use-modal';
import { FC } from 'react';

export const CreateModal: FC = () => {
  const { isCreateOpen } = useModalContext();

  return (
    <Modal title='Create modal' isOpen={isCreateOpen}>
      Create modal
    </Modal>
  );
};
