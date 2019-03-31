import React, { Component } from "react";

import { Container, Button, Input, TextButton, Error } from "./styles";
import api from "../../services/api";

export default class Login extends Component {
  state = {
    username: ""
  };

  handleSubmit = async () => {
    const { username } = this.state;
    try {
      await api.get(`/users/${username}`);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { username } = this.state;
    return (
      <Container>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usaurio"
          value={username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Button onPress={this.handleSubmit}>
          <TextButton>Entrar</TextButton>
        </Button>
      </Container>
    );
  }
}
