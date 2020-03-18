import React, { Component } from "react";

export default class DynamicForm extends Component {
  static data = ["coffee", "bread", "water"];

  state = {
    inputData: ""
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      inputData: value
    });
  };
  render() {
    const { inputData } = this.state;
    return (
      <>
        <input type="text" onChange={this.handleInputChange}></input>
        <div>Valor digitado é : {inputData}</div>
      </>
    );
  }
}
