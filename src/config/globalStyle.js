import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props?.theme?.LightColor}
  }
  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }
`

export default GlobalStyle