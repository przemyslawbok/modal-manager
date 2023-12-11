import { ModalVariant } from '@/data/enums';
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
  z-index: -1;
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