const axios = require('axios')

const Card = (props) => {
  return (
    <div style={{ margin: '1em' }}>
      <img width="75" height="75" src={props.avatar_url} alt="" />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <di style={{ fontSize: '1.25em', fontWeigth: 'bold' }}>
          {props.name}
        </di>
        <div>{props.company} </div>
      </div>
    </div>
  )
}

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  )
}

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = (event) => {
    event.preventDefault();
    //referencia ao campo de input
    console.log('Event: Form Event', this.state.userName)
    //ajax ... (fetch or axios)
    // fetch()
    //   .then(response => {
    //     this.props.onSubmit(response.data);
    //   })

    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data)
      })
    this.setState({ userName: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          type="text"
          placeholder="Github User" />
        <button type="submit"> Add Card </button>
      </form>
    )
  }

}

class App extends React.Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }))
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    )
  }
}

//create a reference for array or list in declaration of component
// ReactDOM.render(<CardList cards={data} />, mountNode);
ReactDOM.render(<App />, mountNode);