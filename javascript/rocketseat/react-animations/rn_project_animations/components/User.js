/* Core */
import React, { Component } from "react";

/* Presentational */
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default class User extends Component {
  render() {
    const { user } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={styles.userContainer}>
          <Image style={styles.thumbnail} source={{ uri: user.thumbnail }} />

          <View style={[styles.infoContainer, { backgroundColor: user.color }]}>
            <View style={styles.bioContainer}>
              <Text style={styles.name}>{user.name.toUpperCase()}</Text>
              <Text style={styles.description}>{user.description}</Text>
            </View>
            <View style={styles.likesContainer}>
              <Icon name="heart" size={12} color="#FFF" />
              <Text style={styles.likes}>{user.likes}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  userContainer: {
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "column",
    marginHorizontal: 15
  },

  thumbnail: {
    width: "100%",
    height: 150
  },

  infoContainer: {
    backgroundColor: "#57BCBC",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15
  },

  bioContainer: {
    flex: 1
  },

  name: {
    color: "#FFF",
    fontWeight: "900",
    fontSize: 10
  },

  description: {
    color: "#FFF",
    fontSize: 13,
    marginTop: 2
  },

  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 20
  },

  likes: {
    color: "#FFF",
    fontSize: 12,
    marginLeft: 5
  }
});
