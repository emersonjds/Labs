import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container } from './styles';

export class Repositories extends Component {
  static navigationOptions = {
    title: 'Repositories'
  }

  state = {};

  render() {
    return (
      <Container>
        <Text> Repositories </Text>
      </Container>
    );
  }
}

export default Repositories;
