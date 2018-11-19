import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyListItem, MyList } from './myList';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <br /> */}

        {/* <MyListItem text="ABC" color="blue" onClick={console.log.bind(console, 'item clicado')} /> */}

        {/* <br /> */}

        <MyList></MyList>

      </div>
    );
  }
}

export default App;
