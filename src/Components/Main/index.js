import React from 'react';
import Greeting from '../Greeting';
import Timer from '../Timer';
import './index.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToday: false,
      year: new Date().getFullYear() - 2015
    };
  }

  componentWillMount() {
    this.checkBirthday();
  }

  checkBirthday() {
    let currentDate = new Date().toDateString();
    let eventDate = new Date(`5/13/${new Date().getFullYear()}`).toDateString();

    if (currentDate === eventDate) {
      this.setState({
        isToday: true
      });
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.checkBirthday(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <main>
        {
          this.state.isToday
          ? <Greeting />
          : <div className='container'>
              <Timer />
              <div className='event'>
                remaining for the&nbsp;
                { this.state.year }
                {
                  this.state.year.toString().endsWith('1')
                  ? 'st'
                  : this.state.year.toString().endsWith('2')
                    ? 'nd'
                    : this.state.year.toString().endsWith('3')
                      ? 'rd'
                      : 'th'
                }
                &nbsp;Anniversary of Discord!
              </div>
            </div>
        }
      </main>
    );
  }
}

export default Main;
