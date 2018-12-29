import React from 'react';
import { Container, Repository } from './style';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
        <ul>
          <li>
            {repository.stargazers_count}
            {' '}
            <small>Stars</small>
            {' '}
          </li>
          <li>
            {repository.forks_count}
            {' '}
            <small>Forks</small>
            {' '}
          </li>
          <li>
            {repository.open_issues_count}
            {' '}
            <small>Issues</small>
            {' '}
          </li>
          <li>
            {repository.pushed_at}
            {' '}
            <small>Last Commit</small>
            {' '}
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

export default CompareList;
