import { createGlobalStyle, styled } from 'styled-components';

import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Montserrat', sans-serif;
  height: 100%;
  background-color: #181818;
  color: #FFF;
}
`;

export const Content = styled.div``;

export default GlobalStyle;
