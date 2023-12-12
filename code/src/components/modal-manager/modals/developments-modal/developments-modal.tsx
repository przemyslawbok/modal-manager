import { Modal } from '@/components/common/modal';
import { useModalContext } from '@/contexts/use-modal';
import { FC } from 'react';

export const DevelopmentsModal: FC = () => {
  const { title, isDevelopmentsOpen } = useModalContext();

  return (
    <Modal title={title} isOpen={isDevelopmentsOpen}>
      Developments modal
    </Modal>
  );
};
