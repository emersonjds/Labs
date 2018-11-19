import React from 'react';
import { render } from 'react-dom';
import   EventEmitter  from 'events';
var eventEmitter = new EventEmitter()

export class MyListItem extends React.Component {
  state = {
    totalClicks: 0
  }
  click = () => {
    var totalClicks = ++this.state.totalClicks;
    this.setState({ totalClicks });
    // this.props.onClick && this.props.onClick();
    eventEmitter.emit('listItem:click');
  }

  removeItem = (index) => {
    eventEmitter.emit('listItem:remove', index)
  }

  render() {
    var props = this.props,
      state = this.state,
      style = { "color": props.color };
    return (
      <li onClick={this.click} style={style} >{props.text}  - {state.totalClicks}
        <button onClick={this.removeItem.bind(this, props.index)}> X </button>
      </li>
    )
  }
}

export class MyList extends React.Component {
  state = {
    totalClicks: 0,
    items: []
  }

  componentDidMount = () => {
    eventEmitter.on('listItem:click', this.childClick);
    eventEmitter.on('listItem:remove', this.removeItem)
  }

  componentWillUnmount = () => {
    eventEmitter.removeListener('listItem:click', this.childClick);
    eventEmitter.removeListener('listItem:remove', this.removeItem)
  }

  childClick = () => {
    var totalClicks = ++this.state.totalClicks;
    this.setState({ totalClicks })
  }

  addItem = (event) => {
    var items = this.state.items,
    text = this.refs.itemText.value || `Ìtem ${items.length}`;

    this.refs.itemText.value = '';
    items.push({ text });
    this.setState({ items })
  }

  removeItem = (index) => {
    var items = this.state.items;
    items.splice(index, 1);
    this.setState({items})
  }

  render() {
    var props = this.props,
      state = this.state;

    return (
      <div>
        <h3>Total de Itens: {state.items.length}</h3>
        <h3>Total de Cliques: {state.totalClicks}</h3>
        <input type="text" ref="itemText"/>
        <button onClick={this.addItem.bind(this)}>Adicionar</button>
        <ul>
          {
            // this.props.children.map((child, index) => {
            //   return <li>{child}</li>
            // })
            //children neste caso é o span adeclarado dentro do componente
            state.items.map((item, index) => {
              return <MyListItem
                // onClick={this.childClick.bind(this)}
                color="red"
                // neste caso estamos acessando o texto dentro da tag span que é definido como props deste componente filho
                text={item.text}
                key={index} 
                index={index}/>
            })
          }
        </ul>
      </div>
    )
  }
}