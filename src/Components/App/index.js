import React from 'react';
import Footer from '../Footer';
import Main from '../Main';

class App extends React.Component {
  render() {
    return (
      <div className='App-container'>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
