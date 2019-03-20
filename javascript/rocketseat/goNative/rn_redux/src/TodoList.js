import React from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

const TodoList = ({ todos, dispatch }) => (
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
    <Button
      title="Adicionar novo todo"
      onPress={() =>
        dispatch({ type: "ADD_TODO", text: "Adicionar novo todo" })
      }
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
