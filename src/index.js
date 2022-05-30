import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import theme from './utils/theme'
import GlobalStyles from './utils/global'
import App from './App'

const root = document.getElementById("root");

render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyles />
    </>
  </ThemeProvider>,
  root
);
