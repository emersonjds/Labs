import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  <button onClick={props.onClick}>
    {props.children}
  </button>
}

Button.defaultProps = {
  children: 'Salvar'
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
}

export default Button;

// export default class Button extends Component {

//   static defaultProps = {
//     children: 'Salvar'
//   }

//   static PropTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.string
//   }

//   render() {
//     return <button class="btn btn-primary" onClick={this.props.onClick}>{this.props.children}</button>
//   }
// }