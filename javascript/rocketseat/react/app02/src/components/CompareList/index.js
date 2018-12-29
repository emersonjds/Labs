import React from 'react';
import { Container, Repository } from './style';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      // eslint-disable-next-line no-unused-expressions
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt="avatar" />
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
    ))}
  </Container>
);

export default CompareList;
