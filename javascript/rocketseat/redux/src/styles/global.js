import { createGlobalStyle } from 'styled-components';
import bkg from '../assets/img/bkg.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${bkg}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
