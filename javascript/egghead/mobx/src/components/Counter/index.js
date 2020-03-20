import React, { Component } from "react";
import * as mobX from "mobx";
import * as mobxReact from "mobx-react";

class Counter extends Component {
  state = {
    counter: 0
  };

  handleDec = () => {};

  handleInc = () => {};

  render() {
    return (
      <div>
        Counter: {this.state.counter}
        <br />
        <button>Click</button>
        <br />
        <button>Click</button>
        <br />
      </div>
    );
  }
}

export default Counter;
