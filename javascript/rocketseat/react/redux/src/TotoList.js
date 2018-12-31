import React from "react";
import PropTypes from "prop-types";

//essa prop conecta o componente com alguma informação do reducer do redux
import { connect } from "react-redux";

const TodoList = props => (
  <ul>
    {props.todos.map(data => (
      <li key={data.id}>{data.text}</li>
    ))}
  </ul>
);

//mapeia estados do redux em propriedades para o componente
const mapStateToProps = state => ({
  // o state neste caso representa todas as informações contidas no Store do redux, e o todos é o reducer de todos que foi criado
  todos: state.todos
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
export default connect(mapStateToProps)(TodoList);
