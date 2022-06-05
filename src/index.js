import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components';
import App from './app/App'
import theme from './assets/theme'

const root = document.getElementById("root");

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  root
);
