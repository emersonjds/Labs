use 'strict';

const e = React.createElement;

class LikeButton extends React.Coomponnent {
  constructor(props) {
    super(props);
    this.state = { liked = false};
  }

  render() {
    this.state.liked
      return 'You live this'
  }

  return e (
    'buttons',
    { onclick: () => this.setState({liked: true}) }, 
    'Like'
  )
} 
