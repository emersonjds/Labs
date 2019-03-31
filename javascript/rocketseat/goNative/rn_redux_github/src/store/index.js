import { createStore } from "redux";
import reducer from "./reducers/login";

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const store = createStore(createAppropriateStore(reducer));

export default store;
