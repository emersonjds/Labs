import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to Champ</div>
        <div className="App-days">14 days</div>
        <div className="App-hr">37 hrs</div>
        <div className="App-min">22 min</div>
        <div className="App-sec">10 sec</div>
        <form onSubmit="" className="form-submit">
          <input type="text" placeholder="Digite a data" />
          <button>Send data</button>
        </form>
      </div>
    );
  }
}
