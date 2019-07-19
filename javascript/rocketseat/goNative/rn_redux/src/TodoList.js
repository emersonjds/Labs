import React from 'react';
import { Text, View, Button } from 'react-native';

import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, dispatch }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {// eslint-disable-next-line react/prop-types
    todos.map(todo => (
      <Text
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
        onPress={() => dispatch({ type: 'MARK_AS_COMPLETED', id: todo.id })}
      >
        {todo.text}
      </Text>
    ))}
    <Button
      title="Adicionar Todo"
      onPress={() => dispatch({ type: 'ADD_TODO', text: 'Novo Todo' })}
    />
  </View>
);

// mapeia o estado do redux em propriedades do componente
const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
