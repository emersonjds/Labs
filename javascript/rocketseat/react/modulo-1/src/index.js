import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return (
      <a href="#" onCilck={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
  // return <a href="#">{this.props.title}</a>;
}

class App extends Component {
  handleClick() {
    alert("Botao clicado");
  }
  render() {
    return (
      <Fragment>
        <h1>Teste</h1>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
