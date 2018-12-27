import React from 'react';
import { Form, Container } from './style';
import CompareList from '../../components/CompareList';

const Main = () => (
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

export default Main;
