import React, { Component } from "react";
import {
  Container,
  InputLogin,
  ButtonLogin,
  TextButton,
  Error
} from "./styles";

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
    const { loginSuccess, loginFailure, navigation } = this.props;
    try {
      await api.get(`/users/${username}`);
      loginSuccess(username);
      navigation.navigate("Repositories");
    } catch (err) {
      loginFailure();
    }
  };
  render() {
    const { username } = this.state;
    const { error } = this.props;
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
          <TextButton>LOGIN</TextButton>
        </ButtonLogin>
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
