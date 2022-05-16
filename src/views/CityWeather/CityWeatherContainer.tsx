import React, { FC, useEffect, useState } from 'react'
import { OnChangeValue } from 'react-select'
import { forecastApi, geocodingApi } from 'api/weatherApi'
import { City } from 'utils/constants'
import CityWeather from './CityWeather'
import { DayForecast, ForecastApiResponse, Option } from './types'

// TODO: move the key to env variables
const apiKey = 'ed441836d6f84cd983aba36a9dc09cc2'

const defaultCity = {
  label: City.Wroclaw,
  value: City.Wroclaw
}

const CityWeatherContainer: FC = () => {
  const [selectedCity, setSelectedCity] = useState<Option>(defaultCity)
  const [data, setData] = useState<ForecastApiResponse>()

  const citiesOptions = Object.values(City).map(city => ({ label: city, value: city }))

  const fetchData = async () => {
    try {
      const response = await geocodingApi.get(
        `/direct?q=${selectedCity.value}&limit=1&appid=${apiKey}`
      )
      const [cityData] = response.data

      const lat = cityData.lat.toFixed(2)
      const lon = cityData.lon.toFixed(2)

      const forecastResponse = await forecastApi.get<ForecastApiResponse>(
        `/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,alerts&appid=${apiKey}&units=metric`
      )

      setData({
        daily: forecastResponse.data.daily.slice(0, 5),
        hourly: forecastResponse.data.hourly
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getMappedDailyForecast = (): DayForecast[] =>
    (data?.daily || []).map(({ dt, temp, humidity }) => ({
      date: new Date(dt * 1000),
      min: temp.min,
      max: temp.max,
      tempMorning: temp.morn,
      tempDay: temp.day,
      tempNight: temp.night,
      humidity,
      hourlyForecast: []
    }))

  useEffect(() => {
    fetchData()
  }, [selectedCity])

  const handleCitySelect = (city: OnChangeValue<Option, false>): void => {
    if (city) {
      setSelectedCity(city)
    }
  }
  return (
    <CityWeather
      citiesOptions={citiesOptions}
      selectedCity={selectedCity}
      handleCitySelect={handleCitySelect}
      dailyForecast={getMappedDailyForecast()}
    />
  )
}

export default CityWeatherContainer
