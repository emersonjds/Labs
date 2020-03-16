import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      username: ""
    };
  }

  increment = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  };

  decrement = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1
    });
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div>
        <p>There are been {this.state.counter}</p>
        <p>
          <button onClick={this.increment}>Click to +</button>
          <button onClick={this.decrement}>Click to -</button>
        </p>
        <p>You typed: {this.state.username}</p>
        <p>
          <input type="text" onChange={this.handleChange} />
        </p>
      </div>
    );
  }
}

export default Counter;
