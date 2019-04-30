import React from 'react';
import './App.css';
import Dealer from './Dealer';
import Player from './Player';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      playerStay : false,
      playerTotal: 0
    }
  }
  render() {
    console.log(this.state.playerTotal);

    return (
      <div>

        <Dealer playerStatus={this.state.playerStay}/>
        <Player stayStatus={this.flipStay} calcTotal={this.trackPlayerTotal} total={this.state.playerTotal}/>

      </div>
    )
  }

  flipStay = () => {

    this.setState({
      playerStay: true
    })

  }

  trackPlayerTotal = (num) => {
    this.setState({
      playerTotal: this.state.playerTotal + num
    })
  }
}

export default App;
