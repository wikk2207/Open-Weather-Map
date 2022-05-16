import WeatherCard from 'components/WeatherCard'
import React, { FC } from 'react'
import Select, { OnChangeValue } from 'react-select'
import { Wrapper, WeatherCardsWrapper, selectStyles } from './CityWeather.styles'
import { DayForecast, Option } from './types'

interface Props {
  citiesOptions: Option[]
  selectedCity: Option
  handleCitySelect: (city: OnChangeValue<Option, false>) => void
  dailyForecast: DayForecast[]
}

const CityWeather: FC<Props> = ({
  citiesOptions,
  selectedCity,
  handleCitySelect,
  dailyForecast
}) => (
  <Wrapper>
    <Select
      options={citiesOptions}
      value={selectedCity}
      onChange={handleCitySelect}
      isMulti={false}
      styles={selectStyles}
    />
    <WeatherCardsWrapper>
      {dailyForecast.map(({ tempDay, tempMorning, tempNight, humidity, date }) => (
        <WeatherCard
          tempDay={tempDay}
          tempMorning={tempMorning}
          tempNight={tempNight}
          humidity={humidity}
          date={date}
        />
      ))}
    </WeatherCardsWrapper>
  </Wrapper>
)

export default CityWeather
