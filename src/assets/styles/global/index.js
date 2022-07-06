import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  *:focus {
    outline: 0;
    outline: none;
  }

  html {
    height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;

    --black: ${({ theme }) => theme.colors.black};
    --darkGray: ${({ theme }) => theme.colors.darkGray};
    --gray: ${({ theme }) => theme.colors.gray};
    --lightGray: ${({ theme }) => theme.colors.lightGray};
    --lighterGray: ${({ theme }) => theme.colors.lighterGray};
    --lightestGray: ${({ theme }) => theme.colors.lightestGray};
    --white: ${({ theme }) => theme.colors.white};
    --primary: ${({ theme }) => theme.colors.darkBlue};
    --secondary: ${({ theme }) => theme.colors.blue};
    --light: ${({ theme }) => theme.colors.lightBlue};
    --lighter: ${({ theme }) => theme.colors.lighterBlue};
    --warning: ${({ theme }) => theme.colors.red};

    @media ${({ theme }) => theme.media.xs} {
      font-size: 55%;
    }

    @media ${({ theme }) => theme.media.sm} {
      font-size: 60%;
    }
  }

  body {
    font-family: "Oswald", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    font-weight: 400;
    line-height: 1.6;
  }

  a,
  button {
    cursor: pointer;
  }

  a,
  input,
  textarea,
  button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }

  img {
    width: 100%;
  }
`;