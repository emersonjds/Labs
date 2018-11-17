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
      <Card 
        name="Emerson Silva"
        avatar_url="https://avatars2.githubusercontent.com/u/12503997?s=460&v=4"
        company="Facebook"
      />
    </div>
  )
}

ReactDOM.render(<CardList />, mountNode);