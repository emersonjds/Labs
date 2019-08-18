import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';
import TodoList from './TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
