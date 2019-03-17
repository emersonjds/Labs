import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import RepositoryCard from "./RepositoryCard";
import Icon from "react-native-vector-icons/FontAwesome";

export class Repositories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Repositories" />
        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder="Informe um repositorio"
          />
          <Icon
            name="search"
            size={20}
            style={{ color: "#000", marginTop: 10 }}
          />
        </View>
        <View style={styles.line} />

        <View>
          <RepositoryCard />
        </View>
      </View>
    );
  }
}

export default Repositories;
