import styled from '@emotion/styled'
import { Box, Modal, Typography } from '@mui/material'

export const CenteredModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightModal = styled(Modal)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const BottomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const CenteredModalBox = styled(Box)`
  width: 400px;
  height: 400px;
  border: 1px solid black;
  padding: 1.5rem;
`

export const RightModalBox = styled(Box)`
  width: 600px;
  height: 100vh;
  border-left: 1px solid black;
  padding: 1.5rem;
`

export const BottomModalBox = styled(Box)`
  width: 100%;
  height: 400px;
  border-top: 1px solid black;
  padding: 1.5rem;
`

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

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