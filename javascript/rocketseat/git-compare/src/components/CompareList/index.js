import React from "react";
import { Container, BoxList, Header } from "./style";

const CompartList = ({ repositories }) => (
  <Container>
    {
      repositories.map(repository => (
        <BoxList key={repository.id}>
          <Header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </Header>

          <ul>
            <li>
              {repository.stargazers_count} <small> Stars</small>
            </li>
            <li>
              {repository.forks_count} <small> Forks</small>
            </li>
            <li>
              {repository.open_issues_count} <small> Issues </small>
            </li>
            <li>
              {repository.pushed_at} <small> Last Commit</small>
            </li>
            <li>
              95,999 <small> Teste</small>
            </li>
          </ul>
        </BoxList>
        ))
    }
  </Container>
);

export default CompartList;
