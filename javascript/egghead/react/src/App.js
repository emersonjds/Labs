import React from "react";
import "./styles.css";
import PropTypes from "prop-types";

App.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default function App(props) {
  return (
    <div className="App">
      Hello {props.firstName} {props.lastName} !
    </div>
  );
}
