import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Button extends Component {
  render() {
    return <button class="btn btn-primary">Enviar </button>
  }
}

class App extends Component {
  render() {
    return (
      <main class="container">
        <Fragment>
          <h1>Hello</h1>
          <Button></Button>
        </Fragment>
      </main>
    )
  }
}

render(<App />, document.getElementById('app'));

// Para que nao haja quebra de layout existe uma outra propriedade chamada Fragment que pode ser utilizada ao inves da div na renderização do componente