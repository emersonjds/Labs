import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container } from "./styles";
import { ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as RepositoriesActions from "../../store/actions/repositories";

class Repositories extends Component {
  static navigationOptions = {
    title: "Repositories"
  };

  componentDidMount() {
    const { loadRepositoriesRequest } = this.props;
    loadRepositoriesRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          repositories.data.map(repository => {
            <Text key={repository.id}>repository.name</Text>;
          })
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repositories);
