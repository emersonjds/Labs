import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Counter from "./components/Counter";

export default function App() {
  return <Counter />;
}

render(
  <div>
    <DevTools />
    <App />
  </div>,
  document.getElementById("root")
);
