import React from 'react';
import './index.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='links'>
          <a
            href='https://discordapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Discord
          </a>
        </div>
        <div className='copyright'>
          Made with ❤ by <a href='https://git.io/kernel' target='_blank'
          rel='noopener noreferrer'>a Discord user</a>.
        </div>
      </footer>
    );
  }
}

export default Footer;
