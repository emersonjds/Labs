const Card = (props) => {
  return (
    <div style={{ margin: '1em' }}>
      <img src="http://placehold.it/75" alt="" />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <di style={{ fontSize: '1.25em', fontWeigth: 'bold' }}>
          Name Here...
        </di>
        <div>Company name here ... </div>
      </div>
    </div>
  )
}

const CardList = (props) => {
  return (
    <div>
      <Card />
    </div>
  )
}

ReactDOM.render(<CardList />, mountNode);