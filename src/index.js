import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './assets/styles/global'
import theme from "./assets/styles/theme";
import App from './app/App';

const root = document.getElementById('root')

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>,
  root
);
