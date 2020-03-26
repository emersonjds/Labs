import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import Counter from "./components/Counter";
import Temperature from "./components/Temperature";
import CalcTemperature from "./components/CalcTempetature";

export default function App() {
  return (
    <div>
      <Counter />
      <Temperature />
      <CalcTemperature />
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
