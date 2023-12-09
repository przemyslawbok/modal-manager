import { useModalContext } from '@/app/use-modal/use-modal.context';
import { Box, Button, Modal, Typography } from '@mui/material';
import { FC } from 'react';
import { StyledBox, StyledModal } from './edit-modal.styled';

export const EditModal: FC = () => {
  const { isEditModalOpen, showEditModal, resetModal } = useModalContext();

  return (
    <>
      <Button onClick={showEditModal}>Open modal</Button>
      <StyledModal
        open={isEditModalOpen}
        onClose={resetModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <StyledBox>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Edit modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            This is edit modal
          </Typography>
        </StyledBox>
      </StyledModal>
    </>
  );
};
