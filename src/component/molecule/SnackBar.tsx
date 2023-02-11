import styled from '@emotion/styled'

// emotion 스타일을 포함시키기 위해 App내에 한번은 SnackBar가 렌더되어야 함
const SnackBar = ({ text }: SnackBarType) => {
  return <StyledSnackBar>{text}</StyledSnackBar>
}

export default SnackBar

export type SnackBarType = {
  text: string
  duration?: number // ms
}

export const animationTime = 500 // ms

const StyledSnackBar = styled.div`
  position: fixed;
  bottom: 0px;
  transform: translateY(100%);
  left: 0;
  right: 0;
  width: fit-content;
  margin: auto;
  background: rgba(128, 128, 128, 0.7);
  color: white;
  text-align: center;
  padding: 6px 10px;
  border-radius: 10px;
  opacity: 0;

  transition-property: opacity, transform;
  transition-duration: ${animationTime}ms;
`
