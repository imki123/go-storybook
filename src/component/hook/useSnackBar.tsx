import React from 'react'
import SnackBar, { SnackBarType } from '../molecule/SnackBar'
import ReactDOMServer from 'react-dom/server'

export const useSnackBar = (props: SnackBarType) => {
  // const [visible, setVisible] = useState(false)

  // function
  const openSnackBar = () => {
    // setVisible(true)
    const html = ReactDOMServer.renderToString(<SnackBar {...props} />)
    const placeholder = document.createElement('div')
    placeholder.innerHTML = html
    const node = placeholder.firstElementChild
    if (node) document.body.appendChild(node)
  }

  return { openSnackBar }
}
