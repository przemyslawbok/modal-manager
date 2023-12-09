import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import { Modal } from '@/app/components/modals/modal';
import {
  AddMoodboardsButton,
  AddResourcesButton,
} from '@/app/components/modals/buttons';

export const InspirationModal: FC = () => {
  const { isInspirationOpen } = useModalContext();

  return (
    <Modal
      buttonText='Open inspiration modal'
      title='Inspiration modal'
      isOpen={isInspirationOpen}
    >
      Inspiration modal
      <AddMoodboardsButton />
      <AddResourcesButton />
    </Modal>
  );
};
