import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *, html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
  font-family: Karla, Roboto, sans-serif;
  color: rgb(51, 51, 51);
 };

 a, a:hover, a:focus, a:active {
      text-decoration: none;
    }
`;

export default GlobalStyle;
