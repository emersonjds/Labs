const _ = require('lodash');

const Star = (props) => {
  const numbersOfStar = 1 + Math.floor(Math.random() * 9)
  // let stars = [];
  // for (let i = 0; i < numbersOfStar; i++) {
  //   stars.push(<i key={i} className="fa fa-star"></i>)
  // }

  return (
    <div className="col-5">
      {_.range(numbersOfStar).map(i => {
          <i key={i} className="fa fa-star"></i>
        })
      }
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

const Answer = (props) => {
  return (
    <div className="col-5">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  )
}

const Numbers = (props) => {
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) => {
          <span key={i}>{number}</span>
        })}
      </div>
    </div>
  )
}

Numbers.list = _.range(1, 10) // lodash gera numeros aleatorios entre 1 e 10

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
        <hr />
        <div className="row">
          <Star />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);