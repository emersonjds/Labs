import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles/app.scss";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container" />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
