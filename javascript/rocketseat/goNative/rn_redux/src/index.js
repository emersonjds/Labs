import './config/ReactotronConfig';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import TodoList from './TodoList';
import { setNavigator } from './services/navigation';
import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
