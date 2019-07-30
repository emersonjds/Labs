import { createStore, compose, applyMiddleware } from 'redux';
import todos from './reducers/todos';

// eslint-disable-next-line no-undef
const composer = __DEV__
  ? compose(
    applyMiddleware(...[]),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...[]);

const store = createStore(todos, composer);

export default store;
