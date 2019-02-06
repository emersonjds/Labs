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

describle('Todolist component', () => {
  it("should render three tags <li>", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.setState({ todos });
    expect(wrapper.find("li").length === 3);
  });

  it('should be able to add new todo', () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({todos});
    wrapper.find('button').simulate('click');

    expect(wrapper.state('todos')).length > 3;
  });
})


