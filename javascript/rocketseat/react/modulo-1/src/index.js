import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { PropTypes } from "prop-types";

class Button extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
  // return <a href="#">{this.props.title}</a>;

  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };
}

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
