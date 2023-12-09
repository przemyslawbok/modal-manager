import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import { Modal } from '@/app/components/modals/modal';

export const DevelopmentsModal: FC = () => {
  const { isDevelopmentsOpen, showDevelopments } = useModalContext();

  return (
    <Modal
      buttonText='Open Developments modal'
      title='Developments modal'
      isOpen={isDevelopmentsOpen}
      onShowClick={showDevelopments}
    >
      Developments modal
    </Modal>
  );
};
