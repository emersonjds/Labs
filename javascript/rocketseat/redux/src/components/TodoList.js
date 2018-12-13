import React from "react";
//conectar o component a alguma informação do reducer
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TodoList = props => {
  console.log(props);
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

// o state neste caso representa todas as informações contidas na Store
const mapStateToProps = state => ({
  todos: state.todos
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

// High Order Function / Component
export default connect(mapStateToProps)(TodoList);
