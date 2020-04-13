import React, { Component } from "react";
import "./App.css";

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      deadline: 'December, 14th, 2020',
      newDeadline: null
    }
  }

  handleChanged  = () => {
    this.setState({
      deadline: this.state.newDeadline,
    })
   this.refs.input.value = '';
  }

  render() {
    const {deadline} = this.state
    return (
      <div className="App">
        <div className="App-title">{deadline}</div>
        <div className="App-days">14 days</div>
        <div className="App-hr">37 hrs</div>
        <div className="App-min">22 min</div>
        <div className="App-sec">10 sec</div>
        <div>
          <input type="text" placeholder="Digite a data" onChange={e => this.setState({
            newDeadline: e.target.value,
          })} ref="input"/>
          <button onClick={() => this.handleChanged()}>Send data</button>
        </div>
      </div>
    );
  }
}
