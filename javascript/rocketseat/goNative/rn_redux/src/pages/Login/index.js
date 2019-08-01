import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export class Login extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Container>
        <Text> Login </Text>
      </Container>
    );
  }
}

export default Login;
