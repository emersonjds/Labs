import React from "react";

export default class Cronometer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lapse: 0,
      running: false
    };
  }

  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime
          });
        });
      }
      return { running: !state.running };
    });
  };

  handleClearClick = () => {
    clearInterval(this.timer);
    this.setState({
      lapse: 0,
      running: false
    });
  };

  UNSAFE_componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    const { lapse, running } = this.state;
    return (
      <div>
        <label>{lapse}ms</label>
        <button onClick={this.handleRunClick}>
          {running ? "Start" : "Stop"}
        </button>
        <button onClick={this.handleClearClick}>Clear</button>
      </div>
    );
  }
}
