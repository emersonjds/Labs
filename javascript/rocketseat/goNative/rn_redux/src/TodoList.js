import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    const { todos, dispatch } = this.props;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {todos.map(todo => (
          <Text key={todo}>{todo}</Text>
        ))}
        <Button
          title="Adicionar Todo"
          onPress={() => dispatch({ type: "ADD_TODO", text: "Novo texto" })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
