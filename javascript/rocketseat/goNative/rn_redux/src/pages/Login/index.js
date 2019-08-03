import React, { Component } from "react";
import {
  Container,
  Title,
  InputText,
  ButtonLogin,
  TextButton,
  TextError,
  Alert
} from "./styles";
import { ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/actions/login";

import api from "../../services/api";

class Login extends Component {
  state = { username: "" };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginRequest } = this.props;
    loginRequest(username);
  };

  render() {
    const { username } = this.state;
    const { error, loading } = this.props;
    return (
      <Container>
        {error && <TextError> Usuario inexistente</TextError>}
        <InputText
          placeholder="Usuario do github"
          autoCorrect={false}
          autoCapitalize="none"
          value={username}
          onChangeText={text => this.setState({ username: text })}
        />
        <ButtonLogin onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size={22} color="#fff" />
          ) : (
            <TextButton>LOGAR</TextButton>
          )}
        </ButtonLogin>
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
