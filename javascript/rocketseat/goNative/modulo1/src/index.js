import "../src/config/ReactotronConfig";
import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Todo from "./components/Todo";

const todos = [{ id: 0, todo: "Fazer Café" }];

export default class App extends Component {
  state = {
    usuario: "Emerson",
    todos
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Add new Todo" }]
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.container}>
        <Text>{this.state.usuario}</Text>
        {todos.map(todo => (
          <Todo key={todo.id} title={todo.title} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
