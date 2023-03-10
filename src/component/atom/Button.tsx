import styled from '@emotion/styled'
import { ReactNode } from 'react'

export const ButtonTypes = {
  Primary: 'Primary',
  Secondary: 'Secondary',
} as const

export interface ButtonModel {
  children: ReactNode
  buttonType?: keyof typeof ButtonTypes
  cssText?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const delay = 500

const Button = ({
  buttonType,
  children,
  cssText,
  disabled,
  onClick,
}: ButtonModel) => {
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
      cssText={cssText}
      disabled={disabled}
      onClick={(e) => {
        makeRipple(e)
        onClick?.(e)
      }}
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
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  :active:not(:disabled) {
    transform: scale(0.95);
  }
  :disabled {
    background: gray;
    cursor: default;
  }
  ${({ buttonType }) =>
    buttonType === 'Secondary' && `background: rgba(0,0,0,0.7);`}
  ${({ cssText }) => cssText}
`
