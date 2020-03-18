import React, { Component } from "react";

export default class Forms extends Component {
  state = {
    error: this.props.getErrorMessage("")
  };
  handleSubmit = event => {
    event.preventDefault();
    // const value = this.inputNode.value;
    //access element by name of input
    const value = event.target.elements.username.value;
    console.log(value);
    const error = this.props.getErrorMessage(value);
    if (error) {
      alert(`error ${error} `);
    } else {
      alert(`success: ${value}`);
    }
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      error: this.props.getErrorMessage(value)
    });
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor=""> Name</label>
        <input
          type="text"
          name="username"
          ref={node => (this.inputNode = node)}
          onChange={this.handleChange}
        />
        {error ? (
          <div
            style={{
              color: "red"
            }}
          >
            {error}
          </div>
        ) : null}
        <button disabled={Boolean(error)} type="submit">
          {" "}
          Submit
        </button>
      </form>
    );
  }
}
