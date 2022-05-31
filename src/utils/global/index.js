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
    --primary: ${(props) => props.theme.color.navy3};
    --secondary: ${(props) => props.theme.color.lightGrey};
    --third: ${(props) => props.theme.color.red2};
    --dark: ${(props) => props.theme.color.darkGrey};
    --light: ${(props) => props.theme.color.lighterGrey};
    --info: ${(props) => props.theme.color.blue1};
    --danger: ${(props) => props.theme.color.red1};
    --warning: ${(props) => props.theme.color.yellow2};
    --success: ${(props) => props.theme.color.green1};
    --shadow: ${(props) => props.theme.color.shadow};

    // Backgrounds
    --primary-bg: ${(props) => props.theme.color.lighterGrey};
    --secondary-bg: ${(props) => props.theme.color.offWhite};
    --loud-bg: ${(props) => props.theme.color.red2};
    --inverse-bg: ${(props) => props.theme.color.navy3};

    // Text
    --primary-text: ${(props) => props.theme.color.darkGrey};
    --secondary-text: ${(props) => props.theme.color.navy3};
    --inverse-text: ${(props) => props.theme.color.white};
    --loud-text: ${(props) => props.theme.color.black};

    // Borders
    --border-primary: #edf2f4;
    --border-secondary: #2b2d42;
    --border-size: 1px;
    --border-type: solid;
    --border-focus: #3498db;

    // Media queries
    @media ${(props) => props.theme.media.xs} {
      font-size: 55%;
    }

    @media ${(props) => props.theme.media.sm} {
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

  a, a:link, a:visited {
    color: #333;
  }

  a:hover {
    color: #d90429;
  }

  h1 {
    color: black;
    font-family: 'Lobster', cursive;
    font-size: 4.8rem;
  }

  h2 {
    color: #d90429;
    font-weight: 400;
    font-size: 2.2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h3, p {
    color: #2b2d42;
    font-weight: 400;
  }

  p {
    font-size: 1.3rem;
  }

`;