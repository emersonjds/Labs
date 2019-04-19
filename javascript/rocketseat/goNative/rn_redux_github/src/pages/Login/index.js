import React, { Component } from "react";

import { Container, Button, Input, TextButton, Error } from "./styles";
import { StatusBar, ActivityIndicator, Text } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/actions/login";

class Login extends Component {
  state = {
    username: ''
  };

  handleSubmit = async  () => {
    const { username } = this.state;
    const { loginRequest } = this.props;
    await loginRequest(username);
  };

  render() {
    const { username } = this.state;
    const { error, loading } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        {error && <Error>Usuario Inexistente </Error>}
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuario"
          value={username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Button onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <TextButton>Entrar</TextButton>
          )}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
