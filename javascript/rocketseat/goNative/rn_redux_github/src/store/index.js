import { createStore } from "redux";
import createSagaMi from "redux-saga";

import reducers from "./reducers";

// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createStore(reducers);

export default store;
