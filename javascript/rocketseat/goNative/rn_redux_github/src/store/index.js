import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./reducers";
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

export default store;
