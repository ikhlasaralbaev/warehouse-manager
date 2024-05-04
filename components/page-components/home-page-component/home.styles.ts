import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 100%;
  margin: 60px 0;
  z-index: 50;
  position: relative;

  .home-title {
    margin-bottom: 60px;
    z-index: 999;
    @media (max-width: 1000px) {
      background-color: ${(props) => props.theme.cardBgColor};
      border-radius: 16px;
      padding: 10px 20px;
    }

    h1 {
      font-size: clamp(1.125rem, 0.8185rem + 1.4013vw, 2.5rem);
      color: ${(props) => props.theme.textColor};
      display: flex;
      font-weight: 400;
      text-align: center;
      display: flex;
      gap: 10px;
      justify-content: center;
      margin-bottom: 10px;

      b {
        font-weight: 700;
      }
    }

    p {
      font-size: 30px;
      color: ${(props) => props.theme.textColor};
      font-weight: 400;
      text-align: center;
    }
  }
`
