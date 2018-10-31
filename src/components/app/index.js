import React, { Component } from "react";
import TimedText from "./TimedText"

import '../../styles/root.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container" align="center">
          <FormattedDate date={this.state.date} />
          <TimedText
            today={this.state.date}
            eventName="Hacktober"
            eventDate={new Date(this.state.date.getFullYear(), 9, 1)}
            eventDurationInDays={31}/>
          <TimedText
            today={this.state.date}
            eventName="Halloween"
            eventDate={new Date(this.state.date.getFullYear(), 9, 31)}/>
          <img className="img-fluid" src="pumpkin.png" />
        </div>
      </div>
    );
  }
}

const FormattedDate = (props) => {
  return <span>It is {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}.</span>;
}

export default App;