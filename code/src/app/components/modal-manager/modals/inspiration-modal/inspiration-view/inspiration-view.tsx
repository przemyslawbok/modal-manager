import { Modal } from '@/app/components/common/modal';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import {
  AddMoodboardsButton,
  AddResourcesButton,
} from '@/app/components/modal-manager/buttons';
import { InspirationViews } from '@/app/use-modal/data';

export const InspirationView: FC = () => {
  const { currentView } = useModalContext();

  const isInspirationViewOpen = currentView === InspirationViews.Inspiration;

  return (
    <Modal title='Inspiration modal' isOpen={isInspirationViewOpen}>
      Inspiration modal
      <AddMoodboardsButton />
      <AddResourcesButton />
    </Modal>
  );
};
