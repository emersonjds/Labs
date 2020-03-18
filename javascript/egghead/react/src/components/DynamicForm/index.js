import React, { Component } from "react";

export default class DynamicForm extends Component {
  static availableoptions = [
    "apple",
    "grape",
    "cherry",
    "orange",
    "pear",
    "peach"
  ];

  state = {
    multiline: "",
    commaSepareted: "",
    multipleSelect: []
  };

  handleCommaSeparate = event => {
    const { value } = event.target;
    const allValls = value;
    this.setState({
      commaSepareted: value,
      multiline: allValls.join("\n"),
      multipleSelect: allValls.filter(v =>
        DynamicForm.availableoptions.includes(v)
      )
    });
  };
  handleMultilineChange = event => {
    const { value } = event.target;
    const allValls = value;
    this.setState({
      multiline: value,
      commaSepareted: value.join(","),
      multipleSelect: allValls.filter(v =>
        DynamicForm.availableoptions.includes(v)
      )
    });
  };
  handleMultiSelectChange = event => {
    const allValls = Array.from(event.target.selectedOptions).map(
      option => option.value
    );
    this.setState({
      multipleSelect: allValls,
      multiline: allValls.join("\n"),
      commaSepareted: allValls.join(",")
    });
  };

  render() {
    const { commaSepareted, multiline, multipleSelect } = this.state;
    return (
      <form>
        <div>
          <label>
            comma sepparated values:
            <br />
            <input
              type="text"
              onChange={this.handleCommaSeparate}
              value={commaSepareted}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">Multiline values: </label>
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows={DynamicForm.availableoptions.length}
            onChange={this.handleMultilineChange}
            defaultValue={multiline}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Multi Select Values</label>
          <br />
          <select
            value={multipleSelect}
            multiple
            size={DynamicForm.availableoptions.length}
            onChange={this.handleMultiSelectChange}
          >
            {DynamicForm.availableoptions.map(data => (
              <option key={data} optionvalues={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
      </form>
    );
  }
}
