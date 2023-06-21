import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000;
    --white: #fff;
    --cyan: #cee3e9;
    --green: #52ffa8;
    --gray: #4e5d73;
    --dark-gray: #313A48;
    --dark-blue: #1f2632;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
  }
  body {
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background: var(--dark-blue);
  }
  button {
    border: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    cursor: pointer;
  }
`;
