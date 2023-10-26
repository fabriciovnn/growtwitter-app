import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *, html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'roboto'
 };

 :root {
  font-size: 10px;
 }
`;

export default GlobalStyle;