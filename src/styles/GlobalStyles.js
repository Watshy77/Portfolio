// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'OsuFont', sans-serif;
    background-color: #282c34;
    color: white;
  }

  a {
    color: #ff66aa;
    text-decoration: none;
  }

  a:hover {
    color: #ff3385;
  }
`;

export default GlobalStyles;