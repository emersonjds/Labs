import React, { Component } from "react";
import { render } from "react-dom";
import "./styles/app.scss";

import Header from "./components/Header";

class App extends Component {
  render() {
    <Header />;
    return <h1>Teste</h1>;
  }
}

render(<App />, document.getElementById("app"));
