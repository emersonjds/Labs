import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cecece',
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class TodoList extends Component {

  render() {
    // eslint-disable-next-line react/prop-types
    const { todos } = this.props;
    return (
    <View style={styles.container}>
        {
        todos.map((todo) => {
          <Text key={todo}>
            {todo}
          </Text>
        })
      }
    </View>
    )
  }
}

// mapeia o estado do redux em propriedades do componente
const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
