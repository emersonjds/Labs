// inicializa o redux na aplicação
import { createStore } from "redux";
import reducers from "./reducers";

// neste ponto sao passado os reducers
const store = createStore(reducers);

export default store;
