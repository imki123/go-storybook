import styled from '@emotion/styled'
import { ReactNode } from 'react'

export interface ButtonModel {
  children: ReactNode
}

const Button = ({ children }: ButtonModel) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
  color: white;
  background: blue;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  padding: 0 16px;
  border-radius: 16px;
  :active {
    opacity: 0.7;
    transform: scale(0.95);
  }
`
