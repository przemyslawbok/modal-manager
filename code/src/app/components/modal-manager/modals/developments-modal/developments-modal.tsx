import { Modal } from '@/app/components/common/modal';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const DevelopmentsModal: FC = () => {
  const { isDevelopmentsOpen } = useModalContext();

  return (
    <Modal title='Developments modal' isOpen={isDevelopmentsOpen}>
      Developments modal
    </Modal>
  );
};
