import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class Button extends Component {

  static defaultProps = {
    children: 'Salvar'
  }

  static PropTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  }

  render() {
    return <button class="btn btn-primary" onClick={this.props.onClick}>{this.props.children}</button>
  }
}

//set default prop of Component
// Button.defaultPops = {
//   children: 'Salvar'
// }

// set propTypes in props and childrens values, set the sort of values
// Button.PropTypes = {
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.string
// }

class App extends Component {

  state = {
    counter: 0
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  // sempre que for declarar uma função dentro da classe, utilizar a notação de variavel que recebe uma function , desta forma o this centraliza o bind de escopo para a classe e nao para a função quando declarado de forma anonima
  // handleClick() { // 
  //this.setState({ counter: this.state.counter++ })
  // desta forma a palavra reservada this usa o escopo da função para se auto chamar
  // }

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

// Para que nao haja quebra de layout existe uma outra propriedade chamada Fragment que pode ser utilizada ao inves da div na renderização do componente

// a chamada do children do metodo props , pega todo o conteudo que foi passado internamente para um outro componente