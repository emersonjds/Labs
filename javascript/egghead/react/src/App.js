import React from "react";
import "./styles.css";

export default function App(props) {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      {/* React */}
      Hello {props.firstName} {props.lastName} !
    </div>
  );
}
