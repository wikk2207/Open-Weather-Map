import { CSSObjectWithLabel } from 'react-select'
import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  justify-content: center;
`
export const selectStyles = {
  option: (provided: CSSObjectWithLabel) => ({
    ...provided
  }),
  control: () => ({
    width: 200
  }),
  singleValue: (provided: CSSObjectWithLabel) => ({
    ...provided
  })
}
