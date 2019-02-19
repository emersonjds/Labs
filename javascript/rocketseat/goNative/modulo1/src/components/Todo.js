import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyleSheet, View, Text } from "react-native";

export default class Todo extends Component {
  static defaultProps = {
    title: "Todo Padrao"
  };
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
