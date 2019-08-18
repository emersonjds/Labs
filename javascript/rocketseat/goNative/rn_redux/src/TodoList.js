import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

export class TodoList extends Component {
  state = {};
  render() {
    const {todos} = this.props;

    return (
      <View style={styles.container}>
        {todos.map(todo => (
          <Text key="todo">{todo}</Text>
        ))}
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
