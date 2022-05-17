import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import GlobalStyle from 'styles/GlobalStyle'
import { theme, muiTheme } from 'styles/theme'
import CityWeatherContainer from 'views/CityWeather'
import i18n from 'i18n'

const App: FC = () => {
  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <ThemeProvider theme={muiTheme}>
            <GlobalStyle />
            <CityWeatherContainer />
          </ThemeProvider>
        </ThemeProvider>
      </I18nextProvider>
    </div>
  )
}

export default App
