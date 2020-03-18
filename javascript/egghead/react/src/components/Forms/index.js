import React, { Component } from "react";

export default class Forms extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.inputNode.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor=""> Name</label>
        <input type="text" ref={node => (this.inputNode = node)} />
        <button type="submit"> Submit</button>
      </form>
    );
  }
}
