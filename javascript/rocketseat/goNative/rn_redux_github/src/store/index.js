import { createStore } from "redux";
const createAppripriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createStore(createAppripriateStore({}));

export default store;
