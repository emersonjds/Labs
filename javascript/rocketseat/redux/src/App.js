import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <GlobalStyles />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
