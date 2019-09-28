import React from 'react';
import './index.css';
import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import store from './store';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <GlobalStyles />
        <Routes />
      </Router>
      <ToastContainer autoClose={3000} />
    </Provider>
  );
}

export default App;
