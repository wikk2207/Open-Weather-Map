import { StylesConfig } from 'react-select'
import styled from 'styled-components'
import { IOption } from './types'

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`
export const WeatherCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const selectStyles: StylesConfig<IOption, false> = {
  container: provided => ({
    ...provided,
    marginBottom: 50
  }),
  control: provided => ({
    ...provided,
    width: 200,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)'
  })
}
