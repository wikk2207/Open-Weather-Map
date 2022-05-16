import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 250px;
  border-radius: 5px;
  padding: 5px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px grey solid;
  text-align: center;
  padding: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ForecastDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
