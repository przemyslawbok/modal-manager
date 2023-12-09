import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import { Modal } from '@/app/components/modals/modal';

export const AddResourcesModal: FC = () => {
  const { isAddResourcesOpen, showInspiration } = useModalContext();

  return (
    <Modal
      buttonText='Open Add Resources modal'
      title='Add Resources modal'
      isOpen={isAddResourcesOpen}
      onBackClick={showInspiration}
    >
      Add Resources modal
    </Modal>
  );
};
