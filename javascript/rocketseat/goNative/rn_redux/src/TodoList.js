import React from 'react';
import { Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from './store/actions/todos';

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, addTodo, markAsCompleted }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {// eslint-disable-next-line react/prop-types
    todos.map(todo => (
      <Text
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
        onPress={() => markAsCompleted(todo.id)}
      >
        {todo.text}
      </Text>
    ))}
    <Button
      title="Adicionar Task"
      onPress={addTodo}
    />
  </View>
);

// mapeia o estado do redux em propriedades do componente
const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
