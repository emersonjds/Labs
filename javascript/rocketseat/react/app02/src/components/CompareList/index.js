import React from 'react';
import { Container, Repository } from './style';

const CompareList = () => (
  <Container>
    <Repository>
      <header>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" />
        <strong>Titulo</strong>
        <small>facebook</small>
      </header>
      <ul>
        <li>
          9999
          {' '}
          <small>stars</small>
          {' '}
        </li>
        <li>
          9999
          {' '}
          <small>stars</small>
          {' '}
        </li>
        <li>
          9999
          {' '}
          <small>stars</small>
          {' '}
        </li>
        <li>
          9999
          {' '}
          <small>stars</small>
          {' '}
        </li>
        <li>
          9999
          {' '}
          <small>stars</small>
          {' '}
        </li>
      </ul>
    </Repository>
  </Container>
);

export default CompareList;
