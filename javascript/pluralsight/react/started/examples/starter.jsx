const Button = function (props) {
	return (
		<button>{this.props.label}</button>
	)
}
ReactDOM.render(<Button label="Go" />, mountNode);

// *states and props has a diference
// *states can to be changed
//* props has fixed values and don't can changed