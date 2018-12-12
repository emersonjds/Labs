import React, { Component } from 'react';
import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositories: [],
  };

  render() {
    const { repositories } = this.state;
    return (
      <Container>
        <Form>
          <input type="text" placeholder="usuario/repositorio" />
          <button type="submit">OK</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}

// api.github.com / repos / facebook / react;
