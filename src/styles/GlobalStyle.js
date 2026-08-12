import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family: 'Pretendard';
    background:#fff;
    color:#222;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  button{
    border:none;
    background:none;
    cursor:pointer;
  }
`;

export default GlobalStyle;