import React, { Component, Fragment } from "react";

export default class Main extends Component {
  state = {
    repositoryInput: ""
  };
  handleAddRepository = () => {};
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuario/value"
            value={this.state.repositoryInput}
            onChange={e =>
              this.setState({
                repositoryInput: e.target.value
              })
            }
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>Facebook/react</strong>
            </p>
            <a href="#">Acessar github</a>
          </li>
        </ul>
      </Fragment>
    );
  }
}
