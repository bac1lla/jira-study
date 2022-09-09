import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: Open-Sans, Helvetica, Sans-Serif, sans-serif;
  }
  //#root {
  //  height: 100vh;
  //  overflow: hidden;
  //}
`