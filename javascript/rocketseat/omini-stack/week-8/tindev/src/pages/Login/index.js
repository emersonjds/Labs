import React from 'react';
import {Container, Logo, UserInput, ButtonLogin, TextButton} from './styles';
import {Platform} from 'react-native';
import logo from '../../assets/img/log.png';

export default function Login() {
  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Logo source={logo} />
      <UserInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuario no github"
      />
      <ButtonLogin>
        <TextButton>Login</TextButton>
      </ButtonLogin>
    </Container>
  );
}
