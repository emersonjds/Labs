import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';

export class TodoList extends Component {
  render() {
    const {todos, dispatch} = this.props;
    return (
      <View style={styles.container}>
        {todos.map(todo => (
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              textDecorationLine: todo.completed ? 'line-through' : 'none',
            }}
            key={todo.id}>
            {todo.text}
          </Text>
        ))}
        <Button
          title="Adicionar novo Todo"
          onPress={() =>
            dispatch({
              type: 'ADD_NEW_TODO',
              text: 'Adicionar novo Todo',
              completed: false,
            })
          }
        />
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

export default connect(mapStateToProps)(TodoList);
