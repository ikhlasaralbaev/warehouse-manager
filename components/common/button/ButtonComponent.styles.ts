import styled from 'styled-components'

export const ButtonComponent = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  border: ${({ theme }) => theme.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.buttonTextColor};
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:active {
    transform: scale(0.9);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`
