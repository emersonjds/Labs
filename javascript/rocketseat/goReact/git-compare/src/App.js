import React, { Fragment } from "react";
import Main from "../src/pages/Main";
import GlobalStyle from "./styles/global";

// const Title = styled.h1`
//   color: #f00;
//   font-size: "32px";
// `;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="App" />
      <Main />
    </Fragment>
  );
};

export default App;
