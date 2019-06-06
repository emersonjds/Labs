import React, { Component, Fragment } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../../store/actions/todos";

const TodoList = ({ todos, addTodo, markAsCompleted }) => {
  return (
    <View style={styles.container}>
      {todos &&
        todos.map(todo => (
          <Text
            onPress={() => markAsCompleted(todo.id)}
            style={{
              textDecorationLine: todo.completed ? "line-through" : "none"
            }}
            key={todo.id}
          >
            {todo.text}
          </Text>
        ))}
      <Button onPress={addTodo} title="Adicionar Todo" />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
