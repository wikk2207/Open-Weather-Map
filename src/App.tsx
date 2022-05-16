import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { theme, muiTheme } from 'styles/theme'
import CityWeatherContainer from 'views/CityWeather'

const App: FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={muiTheme}>
          <GlobalStyle />
          <CityWeatherContainer />
        </ThemeProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
