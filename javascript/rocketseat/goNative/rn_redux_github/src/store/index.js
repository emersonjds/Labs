import { createStore } from "redux";
import reducer from "./reducers/login";

const store = createStore(reducer);

export default store;
