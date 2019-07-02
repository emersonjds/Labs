import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container, InputLogin, ButtonLogin, TextButton } from "./styles";

export class Login extends Component {
  render() {
    return (
      <Container>
        <InputLogin />
        <ButtonLogin>
          <TextButton>LOGIN</TextButton>
        </ButtonLogin>
      </Container>
    );
  }
}

export default Login;
