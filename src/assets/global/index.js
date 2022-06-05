import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyles