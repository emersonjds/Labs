import { createStore, compose, applyMiddleware } from "redux";

import login from "./reducers/login";

const composer = __DEV__
  ? compose(
      applyMiddleware(...[]),
      console.tron.createEnhancer()
    )
  : applyMiddleware(...[]);

const store = createStore(login, composer);

export default store;
