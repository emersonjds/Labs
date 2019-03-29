import { createStore } from "redux";
import reducer from "./reducers/login";
const createAppripriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createStore(createAppripriateStore(reducer));

export default store;
