import React from "react";

import { View, Text } from "react-native";

import styles from "./styles";

const Header = ({ title }) => (
  <View style={styles.container}>
    <View style={styles.left} />
    <View style={styles.title}>
      <Text>{title}</Text>
    </View>
    <View style={styles.right} />
  </View>
);

export default Header;
