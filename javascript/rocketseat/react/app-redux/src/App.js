import React from "react";
import { Provider } from "react-redux";
import "./config/reactotron";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <h1>Teste</h1>
  </Provider>
);

export default App;
