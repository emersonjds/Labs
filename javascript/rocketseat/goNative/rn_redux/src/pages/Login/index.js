import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Title,
  InputText,
  ButtonLogin,
  TextButton,
} from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export class Login extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Container>
        <Title>
          Login
        </Title>
        <InputText
          placeholder="usuario github"
          autoCorrect="false"
          autoCapitalize="none"
        />
        <ButtonLogin>
          <TextButton>
            LOGAR
          </TextButton>
        </ButtonLogin>
      </Container>
    );
  }
}

export default Login;
