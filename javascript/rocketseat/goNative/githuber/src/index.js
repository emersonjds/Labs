import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import createNavigator from './routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const username = AsyncStorage.getItem('@Githuber:username');
    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const { userChecked, userLogged } = this.setState;
    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);
    return <Routes />;
  }
}

// !! transforma o valor em booleano , caso existe ele se torna true se nao false
