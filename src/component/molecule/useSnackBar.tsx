import SnackBar, { animationTime, SnackBarType } from './SnackBar'
import ReactDOMServer from 'react-dom/server'

export const useSnackBar = ({ text, duration = 2000 }: SnackBarType) => {
  // function
  // 스낵바 열기
  function openSnackBar() {
    const html = ReactDOMServer.renderToString(<SnackBar text={text} />)
    const parentNode = document.createElement('div')
    parentNode.innerHTML = html
    const node = parentNode.firstElementChild as HTMLElement
    if (node) {
      document.querySelector('#root')?.appendChild(node)

      // 여는 트랜지션
      setTimeout(() => {
        node?.style.setProperty('opacity', '1')
        node?.style.setProperty('transform', 'translateY(-40px)')
      })
      // duration 후 닫기
      setTimeout(() => {
        closeSnackBar(node)
      }, duration)
    }
  }

  // 스낵바 닫기
  function closeSnackBar(node: HTMLElement) {
    // 닫는 트랜지션
    node?.style.setProperty('opacity', '0')
    node?.style.setProperty('transform', 'translateY(100%)')
    // animationTime 후 닫기
    setTimeout(() => {
      node?.remove()
    }, animationTime)
  }

  return { openSnackBar }
}
