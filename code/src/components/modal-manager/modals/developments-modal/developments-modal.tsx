import { Modal } from '@/components/common/modal';
import { useModalContext } from '@/contexts/use-modal';
import { FC } from 'react';

export const DevelopmentsModal: FC = () => {
  const { isDevelopmentsOpen } = useModalContext();

  return (
    <Modal title='Developments modal' isOpen={isDevelopmentsOpen}>
      Developments modal
    </Modal>
  );
};
