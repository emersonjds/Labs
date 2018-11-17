class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue)
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    )
  }
}

//another component
const Result = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

class App extends React.Component {
  //desta forma o state (variaveis) é acessado por todos os componentes
  state = { counter: 0 }

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }))
  }
  render() {
    return (
      <div>
        {/*pass a reference function in component */}
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode); 