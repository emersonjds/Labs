import React, { Fragment } from "react";
import PropTypes from "prop-types";

//essa prop conecta o componente com alguma informação do reducer do redux
import { connect } from "react-redux";

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    <button onClick={() => addTodo("Novo Todo")}>Adicionar Todo</button>
  </Fragment>
);

//mapeia estados do redux em propriedades para o componente
const mapStateToProps = state => ({
  // o state neste caso representa todas as informações contidas no Store do redux, e o todos é o reducer de todos que foi criado
  todos: state.todos
});

// o dispatch sao as actions que serao disparadas do componente para as Actions em si
const mapDispatchToProps = dispatch => ({
  addTodo: text =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        text
      }
    })
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    }).isRequired
  )
};

// High Orders Function (Componente)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
