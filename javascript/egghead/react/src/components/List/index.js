import React, { Component } from "react";

const Namelist = ["Emerson", "Maria", "Jose", "Claudio"];
export default class List extends Component {
  render() {
    const data = Namelist;
    return (
      <div>
        {data.map(nome => (
          <div key={nome}>{nome}</div>
        ))}
      </div>
    );
  }
}
