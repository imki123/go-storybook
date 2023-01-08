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

const delay = 500

const Button = ({ buttonType, children, styles, disabled }: ButtonModel) => {
  const makeRipple = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.currentTarget
    const width = button.clientWidth

    const ripple = document.createElement('div')
    ripple.style.cssText = `
      position: absolute;
      top: ${e.clientY - button.offsetTop - width}px;
      left: ${e.clientX - button.offsetLeft - width}px;
      width: ${width * 2}px;
      height: ${width * 2}px;
      border-radius: 100%;
      background: rgba(255, 255, 255, 0.3);
      animation: ripple ${delay}ms linear;
    `
    e.currentTarget.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, delay)
  }

  return (
    <StyledButton
      buttonType={buttonType}
      styles={styles}
      disabled={disabled}
      onClick={makeRipple}
    >
      {children}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button<ButtonModel>`
  @keyframes ripple {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

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
  }
  :disabled {
    background: gray;
    cursor: default;
  }
  ${({ buttonType }) =>
    buttonType === 'Secondary' && `background: rgba(0,0,0,0.7);`}
  ${({ styles }) => styles}
`
