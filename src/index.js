import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './utils/theme'
import GlobalStyles from './utils/global'
import App from './app/App'

const root = document.getElementById("root");

render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>,
  root
);
