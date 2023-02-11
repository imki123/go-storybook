import { css, Global } from '@emotion/react'

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
        }
        html {
          min-height: 100%;
        }
        #root {
          height: 100%;
        }
      `}
    />
  )
}

export default GlobalStyle
