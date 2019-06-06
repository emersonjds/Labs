import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";

const TodoList = ({ todos }) => {
  return (
    <View style={styles.container}>
      {todos && todos.map(todo => <Text key={todo}>{todo}</Text>)}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
