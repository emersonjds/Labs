import React from 'react';
import {Container, Logo, UserInput, ButtonLogin, TextButton} from './styles';
import logo from '../../assets/img/log.png';

export default function Login() {
  return (
    <Container>
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
