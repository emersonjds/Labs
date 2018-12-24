import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { PropTypes } from "prop-types";

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

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

class App extends Component {
  handleClick() {
    alert("Botao clicado");
  }
  render() {
    return (
      <Fragment>
        <h1>Teste</h1>
        <Button
          onClick={() => {
            alert("clicado");
          }}
        />
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
