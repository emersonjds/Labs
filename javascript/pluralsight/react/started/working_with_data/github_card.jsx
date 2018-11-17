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

let data = [
  {
    name: "Emerson Silva",
    avatar_url: "https://avatars2.githubusercontent.com/u/12503997?s=460&v=4",
    company: "Facebook"
  },
  {
    name: "Emerson Silva",
    avatar_url: "https://avatars2.githubusercontent.com/u/12503997?s=460&v=4",
    company: "Facebook"
  },
  {
    name: "Emerson Silva",
    avatar_url: "https://avatars2.githubusercontent.com/u/12503997?s=460&v=4",
    company: "Facebook"
  }
]

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  )
}

//create a reference for array or list in declaration of component
ReactDOM.render(<CardList cards={data} />, mountNode);