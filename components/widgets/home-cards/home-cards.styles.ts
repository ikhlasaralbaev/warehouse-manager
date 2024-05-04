import styled from 'styled-components'

export const HomeCardsWrapper = styled.div`
  display: grid;
  gap: 27px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    :last-child {
      order: -1;
      z-index: 10;
    }
  }
`
