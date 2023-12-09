import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import { Modal } from '@/app/components/modals/modal';

export const InspirationModal: FC = () => {
  const { isInspirationOpen, showInspiration } = useModalContext();

  return (
    <Modal
      buttonText='Open inspiration modal'
      title='Inspiration modal'
      isOpen={isInspirationOpen}
      onShowClick={showInspiration}
    >
      Inspiration modal
    </Modal>
  );
};
