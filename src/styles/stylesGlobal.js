import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color:rgb(0, 0, 0); 
    color: #333;  
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
