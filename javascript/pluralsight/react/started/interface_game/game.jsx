const Star = (props) => {
  return (
    <div className="col-5">
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
  )
}

const Button = (props) => {
  return (
    <div className="col-2">
      =
    </div>
  )
}

const Text = (props) => {
  return (
    <div classNAme="col-5">
      ...
    </div>
  )
}

const Numbers = (props) => {
  return (
  	<div className="card text-center">
  	  <div>
  			<span>1</span>
        <span className="selected">2</span>
        <span className="used">3</span>
  	  </div>
  	</div>
  )
}


class Game extends React.Component {
  render() {
    return (
      <div>
        <h3> Play Game</h3>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
      	<h3>Play Nine</h3>
        <hr/>
        <div className="row">
          <Star />
          <Button />
          <Text />
        </div>
        <br />
        <Numbers />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);