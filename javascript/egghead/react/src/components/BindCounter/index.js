import React, { Component } from "react";

export default class BindCounter extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    // is implicit this in the context when i use arrow function
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
        {count}
      </div>
    );
  }
}
