import { FC, useEffect, useState } from 'react'
import CityWeather from './CityWeather'

const CityWeatherContainer: FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('')

  useEffect(() => {
    // TODO: data fetch
  }, [])

  return <CityWeather />
}

export default CityWeatherContainer
