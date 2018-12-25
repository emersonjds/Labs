import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./components/Button";
import "../src/styles/style.scss";

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
      <Fragment>
        <h1> Title </h1>
        Valor: {this.state.counter} <br />
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
