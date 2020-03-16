import React from "react";
import "./styles.css";

const PropTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== "string") {
      return new Error(
        `Hey, you should pas a string for ${propName} but you pass a ${props[propName]} for a ${componentName}`
      );
    }
  }
};

export default function App(props) {
  return (
    <div className="App">
      Hello {props.firstName} {props.lastName} !
    </div>
  );
}

App.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};
