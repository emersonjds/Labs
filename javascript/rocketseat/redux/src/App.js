import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      // provider passa pra todos os componentes as alterações que mudaram no store
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

export default App;
