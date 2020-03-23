import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

const appState = observable({
  count: 0
});

appState.increment = () => {
  appState.count++;
};

appState.decrement = () => {
  appState.count--;
};

@observer
export default class Counter extends React.Component {
  // in this case the state was declared and put in observable on this class
  // @observable count = 0;

  // How observable was declared on state, the functions access the values and change the values of them, but the page is not re rendering
  // this bring more performance on component, or in anothe case, it's common too declare state out of class

  // handleInc =() => {
  //   count++;
  // }

  // handleDec =() => {
  //   count++;
  // }

  handleInc = () => {
    appState.increment();
  };

  handleDec = () => {
    appState.decrement();
  };
  render() {
    return (
      <div>
        Counter : {appState.count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    );
  }
}
