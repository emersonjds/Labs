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
      <Text
        onPress={() =>
          dispatch({
            type: "MARK_AS_COMPLETED",
            id: todo.id
          })
        }
        style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button
      title="Adicionar novo todo"
      onPress={() =>
        dispatch({ type: "ADD_TODO", text: "Adicionar novo todo" })
      }
    />
    <Text>Other Options</Text>
  </View>
);

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps)(TodoList);
