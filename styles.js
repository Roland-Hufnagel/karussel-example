import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
  font-family: Inter;
  src: url("/fonts/Inter-Regular.ttf");
  }

  body {
    font-family: Inter, Arial, Helvetica, sans-serif;
    background-size:cover;
    margin: 0 auto;
    z-index: 10;
   

  }


`;
