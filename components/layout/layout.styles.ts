import styled from 'styled-components'

export const MainLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  transition: background-color 0.2s ease;
  position: relative;

  .top-img {
    position: absolute;
    top: 0;
    right: 0;
    width: 370px;
    height: 370px;

    @media (max-width: 1000px) {
      width: 300px;
      height: 300px;
    }
  }

  .bottom-img {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 370px;
    height: 370px;

    @media (max-width: 1000px) {
      width: 300px;
      height: 300px;
    }
  }
`
