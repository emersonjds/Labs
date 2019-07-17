import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
