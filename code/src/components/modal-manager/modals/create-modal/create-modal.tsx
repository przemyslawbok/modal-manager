import { Modal } from '@/components/common/modal';
import { FC } from 'react';

export const CreateModal: FC = () => {
  return (
    <Modal title='Create modal' isOpen={false}>
      Create modal
    </Modal>
  );
};
