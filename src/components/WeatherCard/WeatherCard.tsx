import React, { FC } from 'react'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import IconWithValue from 'components/IconWithValue'
import { IconClassName } from 'styles/icons'
import { Unit } from 'utils/constants'
import { Wrapper, Header, ForecastDataWrapper } from './WeatherCard.styles'

interface Props {
  date: Date
  tempMorning: number
  tempDay: number
  tempNight: number
  humidity: number
  additionalHeaderComponent?: JSX.Element
}

const WeatherCard: FC<Props> = ({
  date,
  tempMorning,
  tempDay,
  tempNight,
  humidity,
  additionalHeaderComponent
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Header>
        <>
          {`${moment(date).format('dddd, Do MMM')}`}
          {additionalHeaderComponent}
        </>
      </Header>
      <ForecastDataWrapper>
        <IconWithValue
          icon={IconClassName.Sunrise}
          value={tempMorning}
          unit={Unit.DegreeCelsius}
          label={t('forecast.morningTemp')}
        />
        <IconWithValue
          icon={IconClassName.Sun}
          value={tempDay}
          unit={Unit.DegreeCelsius}
          label={t('forecast.dayTemp')}
        />
        <IconWithValue
          icon={IconClassName.Moon}
          value={tempNight}
          unit={Unit.DegreeCelsius}
          label={t('forecast.nightTemp')}
        />
        <IconWithValue
          icon={IconClassName.Humidity}
          value={humidity}
          unit={Unit.Percent}
          label={t('forecast.humidity')}
        />
      </ForecastDataWrapper>
    </Wrapper>
  )
}

export default WeatherCard
