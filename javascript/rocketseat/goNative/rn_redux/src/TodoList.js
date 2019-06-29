import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";
import * as LoginActions from "./store/actions/todos";
import { bindActionCreators } from "redux";

class TodoList extends Component {
  render() {
    const { todos, addTodo, markAsCompleted } = this.props;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {todos.map(todo => (
          <Text
            key={todo.id}
            style={{
              textDecorationLine: todo.completed ? "line-through" : "none"
            }}
            onPress={() => markAsCompleted(todo.id)}
          >
            {todo.text}
          </Text>
        ))}
        <Button title="Adicionar Todo" onPress={() => addTodo()} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
