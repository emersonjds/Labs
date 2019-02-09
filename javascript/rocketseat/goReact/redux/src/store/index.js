// inicializa o redux na aplicação
import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";

// neste ponto sao passado os reducers
// const store = createStore(reducers);

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware(...[])));

export default store;
