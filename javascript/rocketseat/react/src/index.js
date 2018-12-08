import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Button from './Button';

class App extends Component {
  state = {
    counter: 0
  }

  componentDidMount() {

  }

  componentwWillUnmount() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10
  }

  componentDidUpdate(prepProps, prevState) {
    
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <main class="container">
        <Fragment>
          <h1>Hello</h1>
          <h2>{this.state.counter}</h2>
          <Button onClick={this.handleClick}>
            Enviar dados
          </Button>
        </Fragment>
      </main>
    )
  }
}

render(<App />, document.getElementById('app'));
