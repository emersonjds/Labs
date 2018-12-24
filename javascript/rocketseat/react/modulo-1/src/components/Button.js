import React from "react";
import { PropTypes } from "prop-types";

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;

// class Button extends Component {
//   render() {
//     return;
//   }
//   // return <a href="#">{this.props.title}</a>;

//   static defaultProps = {
//     children: "Salvar"
//   };

//   static propTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.string
//   };
// }
