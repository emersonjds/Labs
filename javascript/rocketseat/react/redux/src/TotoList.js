import React, { Fragment } from "react";
import PropTypes from "prop-types";
//esta função associa o dispatch as funçoes que foram criadas no arquivo de Actions
import { bindActionCreators } from "redux";
import * as todoActions from "./store/actions/todos";

//essa prop conecta o componente com alguma informação do reducer do redux
import { connect } from "react-redux";

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>{todos && todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>
    <button onClick={() => addTodo("Novo Todo")}>Adicionar Todo</button>
  </Fragment>
);

//mapeia estados do redux em propriedades para o componente
const mapStateToProps = state => ({
  // o state neste caso representa todas as informações contidas no Store do redux, e o todos é o reducer de todos que foi criado
  todos: state.todos
});

// o dispatch sao as actions que serao disparadas do componente para as Actions em si
const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

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
