import styled from '@emotion/styled'
import { Box, Modal, Typography } from '@mui/material'

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledBox = styled(Box)`
  width: 400px;
  height: 400px;
  background-color: white;

  padding: 1.5rem;
`

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`

export const Title = styled(Typography)`
  display: block;
  width: 80%;
`

export const StyledContentBox = styled(Box)`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`