import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #FFD836;
    --bg-card-color: #FAFAFA;
    --trinca-color: #231F20;
    --border-bottom-color: #E5C231;
    --toggle-color: #998220;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html {
    height: 100vh;
    background-image: linear-gradient(to bottom, #f0f0f0 15%, #000 15%);
  }
`