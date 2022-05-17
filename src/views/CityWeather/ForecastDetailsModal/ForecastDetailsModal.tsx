import React, { FC } from 'react'
import moment from 'moment'
import Modal from 'components/Modal'
import { Unit } from 'utils/constants'
import Statictics from 'components/Statisctics'
import { IconClassName } from 'styles/icons'
import { IStatictics } from '../types'
import { StatiscticsWrapper } from './ForecastDetailsModal.styles'

interface Props {
  isOpen: boolean
  handleClose: () => void
  date?: Date
  weatherStatisctics?: {
    temp: IStatictics
    humidity: IStatictics
  }
}

const ForecastDetailsModal: FC<Props> = ({ isOpen, handleClose, date, weatherStatisctics }) => (
  <Modal
    isOpen={isOpen}
    handleClose={handleClose}
    title={date ? moment(date).format('dddd, Do MMM') : 'Missing data'}
    content={
      weatherStatisctics ? (
        <StatiscticsWrapper>
          <Statictics
            title="Temperature"
            unit={Unit.DegreeCelsius}
            min={weatherStatisctics.temp.min}
            max={weatherStatisctics.temp.max}
            mean={weatherStatisctics.temp.mean}
            mode={weatherStatisctics.temp.mode}
            icon={IconClassName.Thermometer}
          />
          <Statictics
            title="Humidity"
            unit={Unit.Percent}
            min={weatherStatisctics.humidity.min}
            max={weatherStatisctics.humidity.max}
            mean={weatherStatisctics.humidity.mean}
            mode={weatherStatisctics.humidity.mode}
            icon={IconClassName.Humidity}
          />
        </StatiscticsWrapper>
      ) : (
        <>Missing data</>
      )
    }
  />
)

export default ForecastDetailsModal
