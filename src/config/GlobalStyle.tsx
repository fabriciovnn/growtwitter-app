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
`;

export default GlobalStyle;
