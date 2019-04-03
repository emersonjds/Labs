import React, { Component } from "react";

import { Container, Button, Input, TextButton, Error } from "./styles";
import { Text } from "react-native";
import api from "../../services/api";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/actions/login";

class Login extends Component {
  state = {
    username: ""
  };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginSuccess, loginFailed, navigation } = this.props;
    try {
      await api.get(`/users/${username}`);
      loginSuccess(username);
      navigation.navigate("Repositories");
    } catch (e) {
      loginFailed(e);
    }
  };

  render() {
    const { username } = this.state;
    const { error } = this.props;
    return (
      <Container>
        {error && <Error>Usuario Inexistente </Error>}

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

const mapStateToProps = state => ({
  error: state.login.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
