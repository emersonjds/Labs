import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';

AsyncStorage.clear();

export default class Organizations extends Component {
  navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  };

  state = {};

  render() {
    return (
      <View>
        <Header title="Organizações" />
      </View>
    );
  }
}
