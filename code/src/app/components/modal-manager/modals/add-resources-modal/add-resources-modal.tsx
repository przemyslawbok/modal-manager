import { Modal } from '@/app/components/common/modal';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

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
