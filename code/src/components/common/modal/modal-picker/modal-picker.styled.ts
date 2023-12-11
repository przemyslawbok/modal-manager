import styled from '@emotion/styled'
import { Box } from '@mui/material'

const CommonBox = styled(Box)`
  z-index: 1;
  padding: 1.5rem;
`

export const CenteredModalBox = styled(CommonBox)`
  width: 400px;
  height: 400px;
  border: 1px solid black;
`

export const RightModalBox = styled(CommonBox)`
  width: 600px;
  height: 100%;
  border-left: 1px solid black;
`

export const BottomModalBox = styled(CommonBox)`
  width: 100%;
  height: 200px;
  border-top: 1px solid black;
`