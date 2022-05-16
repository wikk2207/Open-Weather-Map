import React, { FC } from 'react'
import IconWithValue from 'components/IconWithValue'
import { IconClassName } from 'styles/icons'
import { Unit } from 'utils/constants'
import { Wrapper, DateWrapper } from './WeatherCard.styles'

interface Props {
  date: Date
  tempMorning: number
  tempDay: number
  tempNight: number
  humidity: number
}

const WeatherCard: FC<Props> = ({ date, tempMorning, tempDay, tempNight, humidity }) => (
  <Wrapper>
    <DateWrapper>{`${date.getDate()}.${date.getMonth() + 1}`}</DateWrapper>
    <IconWithValue icon={IconClassName.Sunrise} value={tempMorning} unit={Unit.DegreeCelsius} />
    <IconWithValue icon={IconClassName.Sun} value={tempDay} unit={Unit.DegreeCelsius} />
    <IconWithValue icon={IconClassName.Moon} value={tempNight} unit={Unit.DegreeCelsius} />
    <IconWithValue icon={IconClassName.Humidity} value={humidity} unit={Unit.Percent} />
  </Wrapper>
)

export default WeatherCard
