import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Header from '../../components/Header';

AsyncStorage.clear();

export default class Organizations extends Component {
  state = {};

  render() {
    return (
      <View>
        <Header title="Organizations" />
      </View>
    );
  }
}
