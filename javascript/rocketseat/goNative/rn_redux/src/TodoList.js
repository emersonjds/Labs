import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

const TodoList = ({ todos }) => (
  <View
    style={{
      backgroundColor: "#FFF",
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    }}
  >
    {todos.map(todo => (
      <Text key={todo}>{todo}</Text>
    ))}
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
