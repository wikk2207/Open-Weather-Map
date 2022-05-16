import React, { FC } from 'react'
import { Box } from '@mui/material'
import { ModalStyled, Backdrop, modalBoxStyle } from './Modal.styles'

interface Props {
  isOpen: boolean
  handleClose: () => void
}

const Modal: FC<Props> = ({ isOpen, handleClose }) => (
  <ModalStyled
    aria-labelledby="unstyled-modal-title"
    aria-describedby="unstyled-modal-description"
    open={isOpen}
    onClose={handleClose}
    BackdropComponent={Backdrop}
  >
    <Box sx={modalBoxStyle}>
      <h2 id="unstyled-modal-title">Text in a modal</h2>
      <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>
    </Box>
  </ModalStyled>
)

export default Modal
