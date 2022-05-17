import React, { FC } from 'react'
import { getMean, getMode } from 'utils/helpers'
import { ISelectedDayForecast } from '../types'
import ForecastDetailsModal from './ForecastDetailsModal'

interface Props {
  isOpen: boolean
  handleClose: () => void
  selectedDayForecast?: ISelectedDayForecast
}

const ForecastDetailsModalContainer: FC<Props> = ({ isOpen, handleClose, selectedDayForecast }) => {
  const getStatisticsForArray = (arr: number[]) => ({
    min: Math.min(...arr),
    max: Math.max(...arr),
    mean: getMean(arr),
    mode: getMode(arr)
  })

  const weatherStatisctics = selectedDayForecast?.hourly
    ? {
        humidity: getStatisticsForArray(selectedDayForecast.hourly.map(hour => hour.humidity)),
        temp: getStatisticsForArray(selectedDayForecast.hourly.map(hour => hour.temp))
      }
    : undefined

  return (
    <ForecastDetailsModal
      isOpen={isOpen}
      handleClose={handleClose}
      date={selectedDayForecast?.date}
      weatherStatisctics={weatherStatisctics}
    />
  )
}

export default ForecastDetailsModalContainer
