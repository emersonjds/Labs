import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from './store/actions/todos';

export class TodoList extends Component {
  render() {
    const {todos, addTodo, markAsCompleted} = this.props;
    return (
      <View style={styles.container}>
        {todos.map(todo => (
          <Text
            style={{
              textDecorationLine: todo.completed ? 'line-through' : 'none',
            }}
            onPress={() => markAsCompleted(todo.id)}
            key={todo.id}>
            {todo.text}
          </Text>
        ))}
        <Button title="Adicionar novo Todo" onPress={() => addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
