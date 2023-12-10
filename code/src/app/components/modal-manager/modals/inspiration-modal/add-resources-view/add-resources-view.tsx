import { Modal } from '@/app/components/common/modal';
import { InspirationViews } from '@/app/use-modal/data';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const AddResourcesView: FC = () => {
  const { currentView, showInspiration } = useModalContext();

  const isAddResourcesOpen = currentView === InspirationViews.AddResources;

  return (
    <Modal
      title='Add Resources view'
      isOpen={isAddResourcesOpen}
      onBackClick={showInspiration}
    >
      Add Resources modal
    </Modal>
  );
};
