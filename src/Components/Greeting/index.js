import React from 'react';
import './index.css';

class Footer extends React.Component {
  render() {
    return (
      <div className='container greeting'>
        <div className='image'>
          <img src='https://cdn.dribbble.com/users/1007500/screenshots/3623450/cake_01.gif' alt='Cake' />
        </div>
        <div className='greeting'>
          Happy Birthday Discord!
        </div>
      </div>
    );
  }
}

export default Footer;
