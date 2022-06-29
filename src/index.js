import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './app/App'
import GlobalStyles from './assets/styles/global'
import theme from "./assets/styles/theme";

const root = document.getElementById('root')

render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
  root
);
