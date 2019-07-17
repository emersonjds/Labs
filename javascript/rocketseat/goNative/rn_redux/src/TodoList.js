import React from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {
      // eslint-disable-next-line react/prop-types
      todos.map(todo => <Text key={todo}>{todo}</Text>)
    }
  </View>
);

// mapeia o estado do redux em propriedades do componente
const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
