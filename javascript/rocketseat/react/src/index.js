import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Button extends Component {
  render() {
    return <a href="#">Enviar </a>
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello</h1>
        <Button></Button>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'));

// Para que nao haja quebra de layout existe uma outra propriedade chamada Fragment que pode ser utilizada ao inves da div na renderização do componente