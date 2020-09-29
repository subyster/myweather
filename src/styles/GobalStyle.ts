import { createGlobalStyle } from 'styled-components';


// this is the basic set of global styles I use on my applications
// changing only colors and some font styles from one app to another
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #061C23;
    -webkit-font-smoothing: antialiased;
  }

  *, input, button {
    border: 0;
    font-size: 16px;
    color: #F4F3EE;
    font-family: sans-serif;
  }

  html, body, #root {
    max-width: 100vw;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;