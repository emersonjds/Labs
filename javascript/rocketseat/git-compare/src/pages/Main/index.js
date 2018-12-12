import React, { Component } from "react";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import moment from "moment";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositoryError: false,
    repositories: [],
    loading: false
  };

  handleAddRepository = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repository } = await api.get(
        `/repos/${this.state.repositoryInput}`
      );

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository],
        repositoryError: true
      });
    } catch (e) {
      this.setState({
        repositoryError: true
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <Container>
        <Form withError={this.state.repositoryError}>
          <input
            type="text"
            placeholder="usuario/repositorio"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit" onClick={this.handleAddRepository}>
            OK
          </button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
