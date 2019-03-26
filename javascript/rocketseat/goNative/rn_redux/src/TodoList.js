import React from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import * as TodoActions from "./store/actions/todos";

const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  <View
    style={{
      backgroundColor: "#FFF",
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    }}
  >
    {todos.map(todo => (
      <Text
        onPress={() => markAsCompleted(todo.id)}
        style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button title="Adicionar novo todo" onPress={addTodo} />
    <Text>Other Options</Text>
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispathToProps
)(TodoList);
