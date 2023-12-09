import { Modal } from '@/app/components/common/modal';
import { ModalVariant } from '@/app/use-modal/data';
import { useModalContext } from '@/app/use-modal/use-modal.context';
import { FC } from 'react';

export const DevelopmentsModal: FC = () => {
  const { isDevelopmentsOpen } = useModalContext();

  return (
    <Modal
      variant={ModalVariant.Bottom}
      title='Developments modal'
      isOpen={isDevelopmentsOpen}
    >
      Developments modal
    </Modal>
  );
};
