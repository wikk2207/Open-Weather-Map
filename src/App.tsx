import React, { FC } from 'react'
import GlobalStyle from 'styles/GlobalStyle'
import CityWeatherContainer from 'views/CityWeather'

const App: FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <CityWeatherContainer />
    </div>
  )
}

export default App
