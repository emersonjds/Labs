const Star = (props) => {
  // const numbersOfStar = 
  // let stars = [];
  // for (let i = 0; i < numbersOfStar; i++) {
  //   stars.push(<i key={i} className="fa fa-star"></i>)
  // }
  return (
    <div className="col-5">
      {_.range(props.numberOfStars).map(i =>
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  )
}

const Button = (props) => {
  let button;

  switch (props.answerIsCorrect) {
    case true:
      button =
        <button className="btn btn-success" onClick={props.acceptAnswer}>
          <i className="fa fa-check"></i>
        </button>
      break;

    case false:
      button =
        <button className="btn btn-danger">
          <i className="fa fa-times"></i>
        </button>
      break;

    default:
      button =
        <button className="btn btn-primary"
          onClick={props.checkAnswer}
          disabled={props.selectedNumbers.lenght === 0}>
          =
      </button>
  }

  return (
    <div className="col-3 text-center">
      {button}
      <br /><br />
      <button
        className="btn btn-warning btn-sm"
        onClick={props.redraw}
        disabled={props.redraws === 0}>
        <i className="fa fa-refresh"></i> {props.redraws}
      </button>
    </div>
  )
}

const Answer = (props) => {
  return (
    <div className="col-4">
      {props.selectedNumbers.map((number, i) =>
        <span key={i} onClick={() => props.unselectNumber(number)}>
          {number}
        </span>
      )}
    </div>
  )
}

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.userNumbers.indexOf(number) >= 0) {
      return 'used'
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected'
    }
  };
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
    selectedNumbers: [9],
    randomNumbersOfStars: 1 + Math.floor(Math.random() * 9),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5
  };

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) { return; }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  };

  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectNumber
        .filter(number => number !== clickedNumber)
    }));
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumbersOfStars ===
        prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }))
  }

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumbersOfStars: 1 + Math.floor(Math.random() * 9)
    }));
  };

  redraw = () => {
    if (this.state.redraws === 0) { return; }
    this.setState(prevState => ({
      randomNumbersOfStars: 1 + Math.floor(Math.random() * 9),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: prevState.redraws - 1
    }))
  }

  render() {
    const {
      selectedNumbers,
      randomNumbersOfStars,
      answerIsCorrect,
      usedNumbers,
      redraws
    } = this.state

    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Star numberOfStars={randomNumbersOfStars} />
          <Button
            selectedNumbers={selectedNumbers}
            redraws={redraws}
            checkAnswer={this.answerIsCorrect}
            answerIsCorrect={answerIsCorrect}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
          />
          <Answer
            selectedNumbers={selectedNumbers}
            unselectedNumber={this.unselectNumber}
          />
        </div>
        <br />
        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
          usedNumbers={usedNumbers}
        />
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