import React from 'react';
import './index.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: new Date(`5/13/${new Date().getFullYear()} PDT`),
      date: new Date(),
      days: 365,
      hours: 24,
      minutes: 60,
      seconds: 60
    };
  }

  tick() {
    let date = new Date();
    let remaining = this.state.birthday - date;

    this.setState({
      date: date,
      days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((remaining / 1000 / 60) % 60),
      seconds: Math.floor((remaining / 1000) % 60)
    });
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

  render() {
    return (
      <div id='timer'>
        <CounterContainer
          name='days'
          counter={ this.state.days }
        />
        <CounterContainer
          name='hours'
          counter={ this.state.hours }
        />
        <CounterContainer
          name='minutes'
          counter={ this.state.minutes }
        />
        <CounterContainer
          name='seconds'
          counter={ this.state.seconds }
        />
      </div>
    );
  }
}

class CounterContainer extends React.Component {
  render() {
    return (
      <div className='section' id={ this.props.name }>
        <span className='counter'>
          { this.props.counter }
        </span>
        <span className='title'>
          { this.props.name }
        </span>
      </div>
    );
  }
}

export default Timer;
