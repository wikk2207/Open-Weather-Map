import Select, { StylesConfig } from 'react-select'
import styled from 'styled-components'
import { Option } from './types'

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightskyblue;
`
export const WeatherCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const selectStyles: StylesConfig<Option, false> = {
  container: (provided, state) => ({
    ...provided,
    marginBottom: 50
  }),
  control: (provided, state) => ({
    ...provided,
    width: 200,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)'
  })
}
