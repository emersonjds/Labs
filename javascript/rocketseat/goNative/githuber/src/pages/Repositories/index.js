import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import styles from './styles';

AsyncStorage.clear();

export default class Repositories extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text>Respositories</Text>
      </View>
    );
  }
}
