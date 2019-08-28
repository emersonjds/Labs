import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';

Icon.loadFont();

export default class Main extends Component {
  static navigationOptions = {
    title: 'Usuarios',
  };

  render() {
    return (
      <Container>
        <Form>
          <Input autoCapitalize="none" autoCorrect={false} />
          <SubmitButton>
            <Icon name="add" size={20} color="#eee" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
