import React from 'react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#e9005c" />
      <Routes />
    </>
  );
};

export default App;
