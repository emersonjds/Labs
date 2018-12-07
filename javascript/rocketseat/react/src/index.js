import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Button extends Component {
  render() {
    return <button class="btn btn-primary" onClick={this.props.onClick}>{this.props.children}</button>
  }
}

class App extends Component {

  handleClick() {
    alert('Pau no cu do Ian');
  }

  render() {
    return (
      <main class="container">
        <Fragment>
          <h1>Hello</h1>
          <Button onClick={this.handleClick}>
            Enviar dados
          </Button>
        </Fragment>
      </main>
    )
  }
}

render(<App />, document.getElementById('app'));

// Para que nao haja quebra de layout existe uma outra propriedade chamada Fragment que pode ser utilizada ao inves da div na renderização do componente

// a chamada do children do metodo props , pega todo o conteudo que foi passado internamente para um outro componente