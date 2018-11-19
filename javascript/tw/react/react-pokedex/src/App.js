import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokeListItem, { pokeListItem } from './Components/pokeListItem';
import { MyListItem, MyList } from './myList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="pokeball-back" id="pokeball-back"
          src="//hanashiro.github.io/pokedex/images/pokeball.svg"
        />
        <input type="text" id="pokeFilter" placeholder="digite o nome buscado" />
        <h2> Teste </h2>

        <PokeListItem />

        <br />

        <MyListItem text="ABC" color="blue" onClick={console.log.bind(console, 'item clicado')} />

        <br />

        <MyList>
          <span>ABC</span>
          <span>DEF</span>
        </MyList>

        
      </div>
    );
  }
}

export default App;
