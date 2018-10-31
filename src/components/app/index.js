import React, { Component } from "react";

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

  daysUntilHalloween() {
    const halloween = new Date(this.state.date.getFullYear(), 9, 31);
    const one_day = 1000 * 60 * 60 * 24;

    if (this.state.date.getMonth() > 9) {
      halloween.setFullYear(halloween.getFullYear() + 1);
    }

    return Math.ceil((halloween.getTime() - this.state.date.getTime()) / (one_day))
  }

  halloweenText() {
    if (this.daysUntilHalloween() != 0) {
      return `${this.daysUntilHalloween()} day${this.daysUntilHalloween() > 1 ? `s` : ``} until Halloween!`
    } else {
      return `It's Halloween!`
    }
  }

  hacktoberText(){
    let daysUntilHacktober = this.daysUntilHalloween() - 30
    if (daysUntilHacktober > 0) {
      return `${daysUntilHacktober} day${daysUntilHacktober > 1 ? `s` : ``} until Hacktober!`
    } else {
      return `It's Hacktober!`
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container" align="center">
          <FormattedDate date={this.state.date} />
          <h1>{this.hacktoberText()}</h1>
          <h1>{this.halloweenText()}</h1>
          <img className="img-fluid" src="pumpkin.png" />
        </div>
      </div>
    );
  }
}

const FormattedDate = (props) => {
  return <h2>It is {props.date.toLocaleDateString()} {props.date.toLocaleTimeString()}.</h2>;
}

export default App;