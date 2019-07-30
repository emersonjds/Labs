import { createStore, compose, applyMiddleware } from 'redux';
// import todos from './reducers/todos';
import reducer from './reducers/login';

// eslint-disable-next-line no-undef
const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

const store = createStore(reducer, composer);

export default store;
