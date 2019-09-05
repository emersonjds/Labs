import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
