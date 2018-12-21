import React, { Fragment } from "react";
//conectar o component a alguma informação do reducer
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as TodoActions from "../store/actions/todos";

const TodoList = ({ todos, addTodo }) => {
  console.log(todos);

  return (
    <Fragment>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("Fazer alguma coisa")}>
        {" "}
        Adicionar Texto
      </button> 
    </Fragment>
  );
};

// o state neste caso representa todas as informações contidas na Store
const mapStateToProps = state => ({
  todos: state.todos
});

const mapDistpatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);
// A função bindActionsCreators , faz a associação da actions com o reducer

// o map dispatch é o responsavel por criar as propriedades de actions que sao inseridas no componente
// const mapDistpatchToProps = dispatch => ({
//   addTodo: text =>
//     dispatch({
//       type: "ADD_TODO",
//       payload: { text }
//     })
// dentro do dispatch ficam informações a respeito do que os reducers irao ouvir
// type é obrigatorio, como se fosse um id, a ação que esta sendo feita
// um padrao utilizado no redux para actions é que todo valor passado na action , deve estar dentro de um objeto payload
// });

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

// High Order Function / Component
export default connect(
  mapStateToProps,
  mapDistpatchToProps
)(TodoList);
