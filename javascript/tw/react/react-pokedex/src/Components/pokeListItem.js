import React, {Component} from 'react';

export default class PokeListItem extends Component {
  static defaultProps = {
    pkm: {
      name: 'Blastoise', number : '025'
    },
    data: []
  }

  render() {
    var props = this.props,
        pkm = props.pkm;

    return (
      <div>
        <li className="poke-list-item">
          <img src={`//serebii.net/pokedex-xy/icon/${pkm.number}.png`} />
          <span> {pkm.number} - {pkm.name} </span>
        </li>
      </div>
    )
  }
}
