class Hello extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "container" }, React.createElement("h1", null, "Getting Started"))
    )
  }
}

ReactDOM.render(React.createElement(Hello, null), mountNode);