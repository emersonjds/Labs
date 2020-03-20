import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

export default class Counter extends Component {
  @observable count = 0;

  render() {
    return (
      <div>
        Counter : {this.count} <br />
        <button> + </button>
        <button> - </button>
      </div>
    );
  }
}
