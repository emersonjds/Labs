import React, {Component} from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            day: 0,
            hr: 0,
            min: 0,
            sec: 0
        }
    }

    getTimeUntil(deadline) {
      const time = Date.parse(deadline) - Date.parse(new Date());
      console.log(' time ', time );
      const seconds = Math.floor((time/1000)%60)
      console.log(seconds)
    }

    render() {
      this.getTimeUntil(this.props.deadline)
        const {day, hr, min, sec} = this.state;
        return (
            <>
                <div className="App-days"> {day} days</div>
                <div className="App-hr"> {hr} hrs</div>
                <div className="App-min"> {min} min</div>
                <div className="App-sec"> {sec} sec</div>
            </>
        )
    }
}