import React, { FC } from 'react'
import Modal from 'components/Modal'
import moment from 'moment'

interface Props {
  isOpen: boolean
  handleClose: () => void
  date?: Date
}

const ForecastDetailsModal: FC<Props> = ({ isOpen, handleClose, date }) => (
  <Modal
    isOpen={isOpen}
    handleClose={handleClose}
    title={date ? moment(date).format('dddd, Do MMM') : 'Missing data'}
    content={<>hej</>}
  />
)

export default ForecastDetailsModal
