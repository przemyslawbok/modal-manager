import { ModalVariant } from '@/app/use-modal/data';
import styled from '@emotion/styled'
import { Box, Modal, Typography } from '@mui/material'

interface StyledModalProps {
  variant?: ModalVariant;
}

export const StyledModal = styled(Modal)<StyledModalProps>`
  display: flex;
  align-items: ${({variant}) => variant === ModalVariant.Bottom ? "flex-end" : "center" };
  justify-content: ${({variant}) => variant === ModalVariant.Right ? "flex-end" : "center" };
  ${({variant}) => variant === ModalVariant.Right ? "padding-top: 24px" : null };
`

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.5rem;
`

export const Title = styled(Typography)`
  display: block;
  margin-right: auto;
`

export const StyledContentBox = styled(Box)`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`