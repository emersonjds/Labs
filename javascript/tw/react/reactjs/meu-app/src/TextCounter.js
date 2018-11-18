import React, { Component } from 'react';

class TextCounter extends Component {

  // assim como passamos propriedades para as tags em html os componentes teem suas proprias propriedades que sao declaradas dentro do objeto defaultProps
  static defaultProps = {
    title: ''
  }

  // as variaveis que serao utilizadas no componente sao declaradas dentro do auto-objeto do React chamado state
  // esse objeto guarda os estados deste componente 
  state = {
    totalChairs: 0
  }

  handleChangeEvent(event) {
    var element = event.target,
      value = element.value;
    this.setState({ totalChairs: value.length})
  }

  render() {
    return (
      //todo component React tem um componente raiz, neste caso a div
      <div>
        {this.props.title}
        <textarea onChange={this.handleChangeEvent.bind(this)}/>
        <div>
          {/* O bind é feito com um par de chaves */}
          <b> Total : </b> {this.state.totalChairs}
        </div>
      </div>
    )
  }
}

export default TextCounter;