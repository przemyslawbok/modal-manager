import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

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