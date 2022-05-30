import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }
  
  *:focus {
    outline: 0;
    outline: none;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    
    // App colour palette
    --primary: ${props => props.theme.color.navy3};
    --secondary: ${props => props.theme.color.lightGrey};
    --third: ${props => props.theme.color.red2};
    --dark: ${props => props.theme.color.darkGrey};
    --light: ${props => props.theme.color.lighterGrey};
    --info: ${props => props.theme.color.blue1};
    --danger: ${props => props.theme.color.red1};
    --warning: ${props => props.theme.color.yellow2};
    --success: ${props => props.theme.color.green1};
    --shadow: ${props => props.theme.color.shadow};

    // Media queries
    @media ${props => props.theme.media.xs} {
      font-size: 55%;
    }

    @media ${props => props.theme.media.sm} {
      font-size: 60%;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }

  a, button {
    cursor: pointer;
  }
  
  a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
`;