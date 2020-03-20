import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

const appState = observable({
  count: 0
});

const increment = () => {
  this;
};

@observer
export default class Counter extends React.Component {
  handleInc = () => {};
  handleDec = () => {};

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
