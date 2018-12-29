import React, { Component } from 'react';
import moment from 'moment';
import { Form, Container } from './style';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryInput: '',
    repositoryError: false,
    repositories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });

    this.setState({ loading: false, repositories: await this.getLocalRepositories() });
  }

  handleAddRepository = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      loading: true,
    });

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);
      repository.lastCommit = moment(repository.pushed_at).fromNow();
      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
      const localRepositories = await this.getLocalRepositories();

      await localStorage.setItem(
        '@GitCompare: repositories',
        JSON.stringify([...localRepositories, repository]),
      );
    } catch (err) {
      this.setState({
        repositoryError: true,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  getLocalRepositories = async () => JSON.parse(await localStorage.getItem('@GitCompare: repositories')) || [];

  handleRemoveRepository = async (id) => {
    const { repositories } = this.state;

    const updateRepositories = repositories.filter(repository => repository.id !== id);

    this.setState({
      repositories: updateRepositories,
    });

    await localStorage.setItem('@GitCompare:repositories', JSON.stringify(updateRepositories));
  };

  handleUpdateRepository = async (id) => {
    const { repositories } = this.state;

    const repository = repositories.find(repo => repo.id === id);

    try {
      const { data } = await api.get(`repos/${repository.full_name}`);
      data.last_commit = moment(data.pushed_at).fromNow();
      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories: repositories.map(repo => (repo.id === data.id ? data : repo)),
      });
      await localStorage.setItem('@GitCompare:repositories', JSON.stringify(repositories));
    } catch (error) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    const {
      loading, repositoryError, repositoryInput, repositories,
    } = this.state;
    return (
      <Container>
        <h1>Git Compare</h1>
        <Form withError={repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuario/repositorio"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}</button>
        </Form>
        <CompareList
          repositories={repositories}
          removeRepository={this.handleRemoveRepository}
          updateRepository={this.handleUpdateRepository}
        />
      </Container>
    );
  }
}
