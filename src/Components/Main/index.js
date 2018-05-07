import React from 'react';
import Timer from '../Timer';
import './index.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear() - 2015
    };
  }

  render() {
    return (
      <main>
        <div className='container'>
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
      </main>
    );
  }
}

export default Main;
