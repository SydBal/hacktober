import React, { Component } from "react";
import PropTypes from 'prop-types';

class TimedText extends Component {
  constructor(props) {
    super(props)
  }

  daysUntilEvent() {
    const one_day = 1000 * 60 * 60 * 24;

    if (this.props.today > this.props.eventDate) {
      this.props.eventDate.setFullYear(this.props.eventDate.getFullYear() + 1);
    }

    return Math.ceil((this.props.eventDate.getTime() - this.props.today.getTime()) / (one_day))
  }

  eventText() {
    if (this.daysUntilEvent() > (this.props.eventDurationInDays? this.props.eventDurationInDays - 1 : 0)) {
      return `${this.daysUntilEvent()} day${this.daysUntilEvent() > 1 ? `s` : ``} until ${this.props.eventName}!`
    } else {
      return `It's ${this.props.eventName}!`
    }
  }

  render() {
    return <h1>{this.eventText()}</h1>
  }
}

TimedText.propTypes = {
  eventName: PropTypes.string.isRequired,
  today: PropTypes.instanceOf(Date).isRequired,
  eventDate: PropTypes.instanceOf(Date).isRequired,
  eventDurationInDays: PropTypes.number
};

export default TimedText;