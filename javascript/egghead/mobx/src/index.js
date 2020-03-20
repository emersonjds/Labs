import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

export default function App() {
  return <div>Emerson</div>;
}

render(
  <div>
    <DevTools />
    <App />
  </div>,
  document.getElementById("root")
);
