import React, { Component } from 'react';
import { Form, Container } from './style';
import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {};

  render() {
    return (
      <Container>
        <h1>Git Compare</h1>
        {/* <img src="#"> */}

        <Form>
          <input type="text" placeholder="usuario/repositorio" />
          <button type="submit">Ok</button>
        </Form>
        <CompareList />
      </Container>
    );
  }
}
