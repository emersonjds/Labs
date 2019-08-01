import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  Container,
  Title,
  InputText,
  ButtonLogin,
  TextButton,
  TextError,
  Alert,
} from './styles';

import api from '../../services/api';

// eslint-disable-next-line react/prefer-stateless-function
export class Login extends Component {

  state = {
    username: ''
  }

  handleSubmit = async () => {
    const { username } = this.state;

    try {
      await api.get(`/users/${username}`);
    } catch(err) {
      Alert.alert(err)
    }
  };

  render() {
    const { username } = this.state;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Container>
        <Title>
          Login
        </Title>
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

export default Login;
