import styled from 'styled-components'
import ModalUnstyled from '@mui/base/ModalUnstyled'
import { theme as globalTheme } from 'styles/theme'
import BackdropUnstyled from './BackdropUnstyled'

export const ModalStyled = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const modalBoxStyle = {
  width: 400,
  bgcolor: globalTheme.colors.white,
  border: `2px solid ${globalTheme.colors.lightGrey}`,
  padding: '16px 32px 24px 32px'
}

export const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`

export const Title = styled.h2`
  width: 100%;
  text-align: center;
`
