import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("should renders as exptected", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<h1>Teste</h1>)).toBe(true);
});
