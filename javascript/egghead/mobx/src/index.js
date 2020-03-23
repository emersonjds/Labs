import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Counter from "./components/Counter";
import Temperature from "./components/Temperature";

export default function App() {
  return (
    <div>
      <Counter />
      <Temperature />
    </div>
  );
}

render(
  <div>
    <DevTools />
    <App />
  </div>,
  document.getElementById("root")
);
