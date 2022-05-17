import React, { FC, useEffect, useState } from 'react'
import { OnChangeValue } from 'react-select'
import moment from 'moment'
import { forecastApi, geocodingApi } from 'api/weatherApi'
import { getDateFromDt } from 'utils/helpers'
import { City, HOURS_IN_DAY } from 'utils/constants'
import CityWeather from './CityWeather'
import { IDayForecast, IForecastApiResponse, IOption, ISelectedDayForecast } from './types'

const defaultCity = {
  label: City.Wroclaw,
  value: City.Wroclaw
}

const CityWeatherContainer: FC = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const [selectedCity, setSelectedCity] = useState<IOption>(defaultCity)
  const [data, setData] = useState<IForecastApiResponse>()
  const [isLoading, setLoading] = useState(false)
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false)
  const [selectedDayForecast, setSelectedDayForecast] = useState<ISelectedDayForecast>()

  const citiesOptions = Object.values(City).map(city => ({ label: city, value: city }))

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await geocodingApi.get(
        `/direct?q=${selectedCity.value}&limit=1&appid=${apiKey}`
      )
      const [cityData] = response.data

      const lat = cityData.lat.toFixed(2)
      const lon = cityData.lon.toFixed(2)

      const forecastResponse = await forecastApi.get<IForecastApiResponse>(
        `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,alerts&appid=${apiKey}&units=metric`
      )
      setLoading(false)
      setData({
        daily: forecastResponse.data.daily.slice(0, 5),
        hourly: forecastResponse.data.hourly
      })
    } catch (error) {
      // TODO: handle error
      console.log(error)
    }
  }

  const getMappedDailyForecast = (): IDayForecast[] =>
    (data?.daily || []).map(({ dt, temp, humidity }) => ({
      date: getDateFromDt(dt),
      min: temp.min,
      max: temp.max,
      tempMorning: temp.morn,
      tempDay: temp.day,
      tempNight: temp.night,
      humidity
    }))

  useEffect(() => {
    fetchData()
  }, [selectedCity])

  const handleCitySelect = (city: OnChangeValue<IOption, false>): void => {
    if (city) {
      setSelectedCity(city)
    }
  }

  const openModal = (date: Date) => {
    setDetailsModalOpen(true)
    const selectedDayHours = data?.hourly.filter(
      hour => moment(getDateFromDt(hour.dt)).date() === moment(date).date()
    )

    // show statistics only for complete data set
    if (!selectedDayHours || selectedDayHours.length < HOURS_IN_DAY) {
      setSelectedDayForecast({ date })

      return
    }

    setSelectedDayForecast({
      date,
      hourly: selectedDayHours.map(({ temp, humidity }) => ({
        temp,
        humidity
      }))
    })
  }

  return (
    <CityWeather
      citiesOptions={citiesOptions}
      selectedCity={selectedCity}
      handleCitySelect={handleCitySelect}
      dailyForecast={getMappedDailyForecast()}
      isLoading={isLoading}
      openModal={openModal}
      closeModal={() => setDetailsModalOpen(false)}
      isModalOpen={isDetailsModalOpen}
      selectedDayForecast={selectedDayForecast}
    />
  )
}

export default CityWeatherContainer
