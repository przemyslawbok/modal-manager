import styled from '@emotion/styled'
import { Box, Modal } from '@mui/material'

export const CenteredModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const RightModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding-top: 24px;
`

export const BottomModal = styled(Modal)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const CenteredModalBox = styled(Box)`
  width: 400px;
  height: 400px;
  border: 1px solid black;
  padding: 1.5rem;
`

export const RightModalBox = styled(Box)`
  width: 400px;
  height: 100%;
  border: 1px solid black;
  padding: 1.5rem;
`

export const BottomModalBox = styled(Box)`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  padding: 1.5rem;
`