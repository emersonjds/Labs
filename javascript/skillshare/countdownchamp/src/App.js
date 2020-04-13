import React, { Component } from "react";
import Clock from './Clock'
import "./App.css";

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      deadline: 'December 14, 2020',
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
        <Clock deadline={this.state.deadline}/>
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
