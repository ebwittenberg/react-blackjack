import React from 'react';
import './App.css';
import Dealer from './Dealer';
import Player from './Player';

class App extends React.Component {
  render() {

    return (
      <div>

        <Dealer />
        <Player />

      </div>
    )
  }
}

export default App;
