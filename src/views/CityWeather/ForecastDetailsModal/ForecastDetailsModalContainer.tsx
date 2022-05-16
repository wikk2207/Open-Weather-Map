import React, { FC } from 'react'
import { ISelectedDayForecast } from '../types'
import ForecastDetailsModal from './ForecastDetailsModal'

interface Props {
  isOpen: boolean
  handleClose: () => void
  selectedDayForecast?: ISelectedDayForecast
}

const ForecastDetailsModalContainer: FC<Props> = ({ isOpen, handleClose, selectedDayForecast }) => {
  return (
    <ForecastDetailsModal
      isOpen={isOpen}
      handleClose={handleClose}
      date={selectedDayForecast?.date}
    />
  )
}

export default ForecastDetailsModalContainer
