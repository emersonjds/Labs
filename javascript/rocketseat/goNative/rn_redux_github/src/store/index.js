import { createStore } from "redux";

import reducers from "./reducers";

// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createStore(reducers);

console.tron.log(store.getState());
export default store;
