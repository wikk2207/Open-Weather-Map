import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  > span {
    font-weight: bold;
    margin-bottom: 10px;
  }
`

export const Wrapper = styled.div``

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  p:first-of-type {
    width: 7rem;
  }
`
