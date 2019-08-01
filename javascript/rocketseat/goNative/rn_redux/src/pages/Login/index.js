import React, { Component } from 'react';
import {
  Container,
  Title,
  InputText,
  ButtonLogin,
  TextButton,
  TextError,
  Alert,
} from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActions from '../../store/actions/login';

import api from '../../services/api';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {

  state = { username: '' };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginSuccess, loginFailure } = this.props;
    try {
      await api.get(`/users/${username}`);
      loginSuccess(username);
    } catch(err) {
      loginFailure();
    }
  };

  render() {
    const { username } = this.state;
    const { error } = this.props;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Container>
        {
          error && <TextError> Usuario inexistente</TextError>
        }
        <InputText
          placeholder="Usuario do github"
          autoCorrect={false}
          autoCapitalize="none"
          value={username}
          onChangeText={text => this.setState({username: text})}
        />
        <ButtonLogin onPress={this.handleSubmit}>
          <TextButton>
            LOGAR
          </TextButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
4
