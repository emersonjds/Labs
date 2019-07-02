import "./config/ReactotronConfig";

import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./TodoList";
import Routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
