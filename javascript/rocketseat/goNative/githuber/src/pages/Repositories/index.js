import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';

AsyncStorage.clear();

export default class Repositories extends Component {
  state = {};

  render() {
    return (
      <View>
        <Header title="Repositorios" />
      </View>
    );
  }
}
