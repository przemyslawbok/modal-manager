import { Modal } from '@/app/components/common/modal';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';
import {
  AddMoodboardsButton,
  AddResourcesButton,
} from '@/app/components/modal-manager/buttons';
import { ModalVariant } from '@/app/use-modal/data';

export const InspirationModal: FC = () => {
  const { isInspirationOpen } = useModalContext();

  return (
    <Modal
      variant={ModalVariant.Right}
      title='Inspiration modal'
      isOpen={isInspirationOpen}
    >
      Inspiration modal
      <AddMoodboardsButton />
      <AddResourcesButton />
    </Modal>
  );
};