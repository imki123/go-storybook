import styled from '@emotion/styled'
import { ReactNode } from 'react'

export const ButtonTypes = {
  Primary: 'Primary',
  Secondary: 'Secondary',
} as const

export interface ButtonModel {
  buttonType: keyof typeof ButtonTypes
  children: ReactNode
  styles?: string
  disabled?: boolean
}

const Button = ({ buttonType, children, styles, disabled }: ButtonModel) => {
  return (
    <StyledButton buttonType={buttonType} styles={styles} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<ButtonModel>`
  position: relative;
  color: white;
  background: blue;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  padding: 0 16px;
  border-radius: 16px;
  overflow: hidden;
  :active:not(:disabled) {
    transform: scale(0.95);
    :after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(128, 128, 128, 0.3);
    }
  }
  :disabled {
    background: gray;
    cursor: default;
  }
  ${({ buttonType }) =>
    buttonType === 'Secondary' && `background: rgba(0,0,0,0.7);`}
  ${({ styles }) => styles}
`
