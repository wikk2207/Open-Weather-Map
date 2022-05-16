import React, { FC } from 'react'
import { IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import WeatherCard from 'components/WeatherCard'
import Select, { OnChangeValue } from 'react-select'
import { Wrapper, WeatherCardsWrapper, selectStyles } from './CityWeather.styles'
import { IDayForecast, IOption, ISelectedDayForecast } from './types'
import ForecastImportModalContainer from './ForecastDetailsModal'

interface Props {
  citiesOptions: IOption[]
  selectedCity: IOption
  handleCitySelect: (city: OnChangeValue<IOption, false>) => void
  dailyForecast: IDayForecast[]
  isLoading: boolean
  openModal: (day: Date) => void
  closeModal: () => void
  isModalOpen: boolean
  selectedDayForecast?: ISelectedDayForecast
}

const CityWeather: FC<Props> = ({
  citiesOptions,
  selectedCity,
  handleCitySelect,
  dailyForecast,
  isLoading,
  openModal,
  closeModal,
  isModalOpen,
  selectedDayForecast
}) => (
  <Wrapper>
    <Select
      options={citiesOptions}
      value={selectedCity}
      onChange={handleCitySelect}
      isMulti={false}
      styles={selectStyles}
    />
    {isLoading ? (
      <>Loading ...</>
    ) : (
      <WeatherCardsWrapper>
        {dailyForecast.map(({ tempDay, tempMorning, tempNight, humidity, date }) => (
          <WeatherCard
            key={date.getTime()}
            tempDay={tempDay}
            tempMorning={tempMorning}
            tempNight={tempNight}
            humidity={humidity}
            date={date}
            additionalHeaderComponent={
              <IconButton onClick={() => openModal(date)}>
                <MoreHorizIcon />
              </IconButton>
            }
          />
        ))}
      </WeatherCardsWrapper>
    )}
    <ForecastImportModalContainer
      isOpen={isModalOpen}
      handleClose={closeModal}
      selectedDayForecast={selectedDayForecast}
    />
  </Wrapper>
)

export default CityWeather
