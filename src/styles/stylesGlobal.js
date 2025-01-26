import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color:#11071f; 
    color: #333;  
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
