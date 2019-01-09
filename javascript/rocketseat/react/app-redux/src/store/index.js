// inicializa o redux na aplicação
import { createStore, compose, applyMiddleware } from "redux";
import { createSagaMiddleware } from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

// neste ponto sao passado os reducers
// const store = createStore(reducers);

const createAppropriateStore =
  process.env.NODE_ENV === "development"
    ? console.tron.createStore
    : createStore;

const store = createAppropriateStore(
  reducers,
  compose(applyMiddleware(middlewares))
);

sagaMiddleware.run(sagas); // esta função informa para a aplicação que os sagas estao configurados e prontos para uso

export default store;
