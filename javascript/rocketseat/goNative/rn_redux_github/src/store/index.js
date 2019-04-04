import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();

// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createStore(rootReducers, sagaMiddleware);

sagaMiddleware.run();

export default store;
