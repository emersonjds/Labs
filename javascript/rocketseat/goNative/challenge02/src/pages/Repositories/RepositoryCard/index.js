import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export class RepositoryCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.detailsRepo}>
          <Image
            source={require("../../../images/face.png")}
            style={{ height: 50, width: 50 }}
          />
          <View style={styles.titles}>
            <Text style={styles.titleRepo}>Titulo</Text>
            <Text style={styles.descriptionRepo}>Descriçào</Text>
          </View>
        </View>

        <View style={styles.icon}>
          <Icon name="angle-right" size={20} />
        </View>
      </View>
    );
  }
}

export default RepositoryCard;
