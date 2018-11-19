import React from 'react';
import { render } from 'react-dom';
import Events from 'events';
var Channel = new Events.Emitter();

export class MyListItem extends React.Component {
  state = {
    totalClicks: 0
  }
  click = () => {
    var totalClicks = ++this.state.totalClicks;
    this.setState({ totalClicks });
    // this.props.onClick && this.props.onClick();
    Channel.emit('listItem:click');
  }

  render() {
    var props = this.props,
      state = this.state,
      style = { "color": props.color };
    return (
      <li onClick={this.click} style={style} >{props.text}  - {state.totalClicks}</li>
    )
  }
}

export class MyList extends React.Component {
  state = {
    totalClicks: 0
  }

  componentDidMount = () => {
    Channel.on('listItem:click', this.childClick);
  }

  componentWillUnmount = () => {
    Channel.removeListener('listItem:click', this.childClick);
  }

  childClick = () => {
    var totalClicks = ++ this.state.totalClicks;
    this.setState({totalClicks})
  }

  render() {
    var props = this.props,
      state = this.state

    return (
      <div>
        <h3>Total de Itens: {props.children.length}</h3>
        <h3>Total de Cliques: {state.totalClicks}</h3>
        <ul>
          {
            // this.props.children.map((child, index) => {
            //   return <li>{child}</li>
            // })
            //children neste caso é o span adeclarado dentro do componente
            this.props.children.map((child, index) => {
              return <MyListItem 
                onClick={this.childClick.bind(this)}
                color="red"
                // neste caso estamos acessando o texto dentro da tag span que é definido como props deste componente filho
                text={child.props.children}
                key={index} />
            })
          }
        </ul>
      </div>
    )
  }
}