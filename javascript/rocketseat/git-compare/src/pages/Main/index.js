import React, { Component } from "react";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";
import api from "../../services/api";
import moment  from 'moment';

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: []
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    console.log(this.state.repositoryInput)

    try {
      const {data: repository} = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository]
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <Container>
        <Form>
          <input
            type="text"
            placeholder="usuario/repositorio"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit" onClick={this.handleAddRepository}>OK</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}

