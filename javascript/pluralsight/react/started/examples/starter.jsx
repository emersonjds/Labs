// const Button = (props) => {
// 	return (
// 		<button>{props.label}</button>
// 	)
// }
// ReactDOM.render(<Button label="Go" />, mountNode);

// *states and props has a diference
// *states can to be changed
//* props has fixed values and don't can changed

class Button extends React.Component {
	state = { counter: 0 }

	handleClick = () => {
		// this.state.counter++;
		this.setState = ({
			counter: this.state.counter + 1
		})
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.counter}
			</button>
		)
	}
}

ReactDOM.render(<Button />, mountNode)