import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {todos.map(todo => (
          <Text key={todo}>{todo}</Text>
        ))}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
