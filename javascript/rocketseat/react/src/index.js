import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

import "./style.scss";

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <main className="container">
        <Fragment>
          <h1>Hello</h1>
          <h2>{this.state.counter}</h2>
          <Button onClick={this.handleClick}>Enviar dados</Button>
        </Fragment>
      </main>
    );
  }
}

render(<App />, document.getElementById("app"));
