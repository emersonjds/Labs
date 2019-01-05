import React from "react";
import { Provider } from "react-redux";
import "./config/reactotron";
import store from "./store";
import Route from "./routes";
import Main from "./pages/main";

const App = () => (
  <Provider store={store}>
    <Route exact path="/" component={Main} />
  </Provider>
);

export default App;
