import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import RepositoryCard from "./RepositoryCard";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../services/api";

export class Repositories extends Component {
  state = {
    repositoryName: "",
    data: []
  };

  getRepositories = async () => {
    const { repositoryName } = this.state;
    const response = await api.get(`/${repositoryName}`);
    this.setState({ data: response.data });
  };

  render() {
    const { repositoryName } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Repositories" />
        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder="Informe um repositorio"
            autoCapitalize="none"
            autoCorrect={false}
            value={repositoryName}
            onChangeText={repository =>
              this.setState({ repositoryName: repository })
            }
          />
          <TouchableOpacity onPress={this.getRepositories}>
            <Icon
              name="plus"
              size={20}
              style={{ color: "#000", marginTop: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.line} />

        <RepositoryCard />
      </View>
    );
  }
}

export default Repositories;
