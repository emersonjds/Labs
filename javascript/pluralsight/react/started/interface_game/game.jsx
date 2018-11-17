const Star = (props) => {
  // const numbersOfStar = 
  // let stars = [];
  // for (let i = 0; i < numbersOfStar; i++) {
  //   stars.push(<i key={i} className="fa fa-star"></i>)
  // }

  return (
    <div className="col-5">
      {_.range(props.randomNumbersOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
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
      {props.selectedNumbers.map((number, i) =>
        <span key={i} onClick={() => props.unselectedNumber(number)}>
          {number}
        </span>
      )}
    </div>
  )
}

const Numbers = (props) => {

  const numberClassName = (number) => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected'
    }
  }

  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) => {
          <span key={i} className={numberClassName(number)}
            onClick={() => props.selectNumber(number)}>
            {number}
          </span>
        })}
      </div>
    </div>
  )
}

Numbers.list = _.range(1, 10) // lodash gera numeros aleatorios entre 1 e 10

class Game extends React.Component {
  state = {
    selectedNumbers: [],
    randomNumbersOfStars: 1 + Math.floor(Math.random() * 9)
  };
  selectNumber = (clickedNumbers) => {
    if (this.state.selectedNumbers.indexOf(clickedNumbers) >= 0) { return; }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumbers)
    }))
  };
  unselectedNumber = (clickedNumber) => {
    this.setState(prevState =>({
      selectedNumbers: prevState.selectNumber
        .filter(number => number !== clickedNumber)
    }));
  }
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Star randomNumbersOfStars={this.state.randomNumbersOfStars} />
          <Button />
          <Answer 
            selectedNumbers={this.state.selectedNumbers} 
            unselectedNumber={this.state.unselectedNumber}
          />
        </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers} />
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Game />
    )
  }
}

ReactDOM.render(<App />, mountNode);