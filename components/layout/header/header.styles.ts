import styled from 'styled-components'

export const HeaderWrapperEl = styled.header`
  position: sticky;
  width: 80%;
  top: 20px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.cardBgColor};
  border: ${(props) => props.theme.border};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 40px;
  backdrop-filter: blur(4px);
  justify-content: space-between;
  z-index: 100;

  @media (max-width: 1000px) {
    width: 80%;
    padding: 12px 20px;
  }

  .header-logo {
    color: ${(props) => props.theme.textColor};
    font-size: clamp(1.375rem, 1.2914rem + 0.3822vw, 1.75rem);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  .header-navigation {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      display: none;
    }

    .header-menu {
      display: flex;
      gap: 14px;

      li {
        a {
          color: ${(props) => props.theme.secondaryTextColor};
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.2s ease;

          &:hover,
          &.active {
            color: ${(props) => props.theme.primaryColor};
          }
        }
      }
    }
  }
`
export const HamburgerMenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  .header-hamburger-navigation {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.hamburgerBgColor};
    border: ${(props) => props.theme.border};
    left: 0;
    top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 50px;
      padding: 10px 20px;
      margin-bottom: 50px;
      li {
        font-size: 24px;
        a {
          text-decoration: none;
          color: ${(props) => props.theme.textColor};
        }
      }
    }
  }
`
