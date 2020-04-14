import React, {Component} from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            days: 0,
            hour: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
      this.getTimeUntil(this.props.deadline)
    }

    componentDidMount() {
      setInterval(() => {
        this.getTimeUntil(this.props.deadline)
      }, 1000);
    }

    leading0 = (num) => num < 10 ? '0' + num : num;

    getTimeUntil(deadline) {
      const time = Date.parse(deadline) - Date.parse(new Date());
      console.log(' time ', time );
      const seconds = Math.floor((time/1000) % 60)
      const minutes = Math.floor((time/1000/60) % 60);
      const hour = Math.floor((time/(1000*60*60)) % 24);
      const days = Math.floor((time/(1000*60*60*24)));

      this.setState({
        days, hour, minutes, seconds
      })
    }

    render() {
        const {days, hour, minutes, seconds} = this.state;
        return (
            <>
                <div className="App-days"> {this.leading0(days)} days</div>
                <div className="App-hr"> {this.leading0(hour)} hrs</div>
                <div className="App-min"> {this.leading0(minutes)} min</div>
                <div className="App-sec"> {this.leading0(seconds)} sec</div>
            </>
        )
    }
}