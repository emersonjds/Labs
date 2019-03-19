import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Text
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import RepositoryCard from "./RepositoryCard";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../services/api";

export class Repositories extends Component {
  state = {
    repositoryName: "",
    loading: false,
    data: []
  };

  getRepositories = async () => {
    const { repositoryName } = this.state;
    const { data } = await api.get(`repos/${repositoryName}`);
    this.setState({ data: data });
    console.log(data);
  };

  renderListItem = ({ item }) => <RepositoryCard repository={item} />;

  renderList = () => {
    const { data } = this.state;
    return (
      <FlatList
        data={data}
        // keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <RepositoryCard repository={item} />}
      />
    );
  };

  render() {
    console.log("render state", this.state);
    const { repositoryName, loading, data } = this.state;
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
        {loading ? <ActivityIndicator /> : this.renderList()}
      </View>
    );
  }
}

export default Repositories;
