import React, { Component } from "react";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <>
        <Header title="Emerson">
          <ul>
            <li>Home</li>
            <li>Quem somos</li>
            <li>Formulario</li>
          </ul>
        </Header>
        <h1>Testando nome</h1>
      </>
    );
  }
}
