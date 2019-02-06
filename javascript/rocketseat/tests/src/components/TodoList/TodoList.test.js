import React from "react";
import { shallow } from "enzyme";
import TodoList from "./index";

const todos = [
  {
    id: 0,
    text: "Lavar a louça"
  },
  {
    id: 1,
    text: "React"
  },
  {
    id: 2,
    text: "Python"
  }
];

it("should render three tags <li>", () => {
  const wrapper = shallow(<TodoList />);
  wrapper.setState({ todos });
  expect(wrapper.find("li").length === 3);
});
