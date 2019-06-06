import React, { Component, Fragment } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

const TodoList = ({ todos, dispatch }) => {
  return (
    <Fragment>
      <View style={styles.container}>
        {todos && todos.map(todo => <Text key={todo}>{todo}</Text>)}
        <Button
          onPress={() => dispatch({ type: "ADD_TODO", text: "Novo Todo" })}
          title="Adicionar Todo"
        />
      </View>
    </Fragment>
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
