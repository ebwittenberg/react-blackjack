import React from 'react';
import './App.css';
import Dealer from './Dealer';
import Player from './Player';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      playerStay : false,
      playerTotal: 0,
      deck: [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11]
    }
  }
  render() {
    console.log(this.state.deck);

    return (
      <div>

        <Dealer playerStatus={this.state.playerStay}/>
        <Player 
          stayStatus={this.flipStay} 
          calcTotal={this.trackPlayerTotal} 
          total={this.state.playerTotal}
          dealCard={this.dealCard}
          deck={this.state.deck}
        />

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

  dealCard = (cardIndex) => {

    const beginningOfDeck = this.state.deck.slice(0, cardIndex);
    const endOfDeck = this.state.deck.slice(cardIndex + 1);

    this.setState({
      deck: beginningOfDeck.concat(endOfDeck)
    })


  }
}

export default App;
