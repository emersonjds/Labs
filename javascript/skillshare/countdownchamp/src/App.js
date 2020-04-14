import React, { Component } from "react";
import Clock from './Clock'
import {Form, FormControl, Button} from 'react-bootstrap'

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
        <Form>
          <FormControl type="text" placeholder="Digite a data" onChange={e => this.setState({
            newDeadline: e.target.value,
          })} ref="input"/>
          <Button onClick={() => this.handleChanged()} style={{
            marginTop: '20px'
          }} >Change Date</Button>
        </Form>
      </div>
    );
  }
}
