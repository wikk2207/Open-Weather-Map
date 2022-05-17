import React, { FC } from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
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

const ForecastDetailsModal: FC<Props> = ({ isOpen, handleClose, date, weatherStatisctics }) => {
  const { t } = useTranslation()

  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      title={date ? moment(date).format('dddd, Do MMM') : t('statistics.noData')}
      content={
        weatherStatisctics ? (
          <StatiscticsWrapper>
            <Statictics
              title={t('statistics.temperature')}
              unit={Unit.DegreeCelsius}
              min={weatherStatisctics.temp.min}
              max={weatherStatisctics.temp.max}
              mean={weatherStatisctics.temp.mean}
              mode={weatherStatisctics.temp.mode}
              icon={IconClassName.Thermometer}
            />
            <Statictics
              title={t('statistics.humidity')}
              unit={Unit.Percent}
              min={weatherStatisctics.humidity.min}
              max={weatherStatisctics.humidity.max}
              mean={weatherStatisctics.humidity.mean}
              mode={weatherStatisctics.humidity.mode}
              icon={IconClassName.Humidity}
            />
          </StatiscticsWrapper>
        ) : (
          <>{t('statistics.noData')}</>
        )
      }
    />
  )
}

export default ForecastDetailsModal
