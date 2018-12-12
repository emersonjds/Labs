import React from "react";
import { Container, BoxList, Header } from "./style";
import PropTypes from "prop-types";

const CompartList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
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
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      }),
      stargazers_count: PropTypes.string,
      forks_count: PropTypes.string,
      open_issues_count: PropTypes.string,
      pushed_at: PropTypes.string
    })
  ).isRequired
};

export default CompartList;
