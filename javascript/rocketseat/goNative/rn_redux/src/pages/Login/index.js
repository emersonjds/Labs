import React, { Component } from "react";
import {
  Container,
  InputLogin,
  ButtonLogin,
  TextButton,
  Error
} from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LoginActions from "../../store/actions/login";
import { ActivityIndicator } from "react-native";

class Login extends Component {
  state = {
    username: ""
  };
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
        {error && <Error> Usuario Invalido </Error>}
        <InputLogin
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuario"
          value={username}
          onChangeText={text =>
            this.setState({
              username: text
            })
          }
        />

        <ButtonLogin onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <TextButton>ACESSAR</TextButton>
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
