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
      dealerTotal: 0,
      deck: [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11],
      playerDealing: false
    }
  }
  render() {

    console.log(this.state.playerDealing);
    console.log(this.state.deck);

    return (
      <div>

        <Dealer 
        playerStatus={this.state.playerStay}
        total={this.state.dealerTotal}
        dealCard={this.dealCardToDealer}
        deck={this.state.deck}
        finishDealing={this.state.playerDealing}
        />
        <Player 
          stayStatus={this.flipStay} 
          total={this.state.playerTotal}
          dealCard={this.dealCardToPlayer}
          deck={this.state.deck}
          finishDealing={this.finishPlayerDealing}
        />
        <h2>
          {
            this.state.playerStay && this.state.dealerTotal > this.state.playerTotal ? 'You lose, dealer total higher' : null
          }

          {
            this.state.playerStay && this.state.playerTotal > this.state.dealerTotal ? 'You win!' : null
          }
        </h2>

      </div>
    )
  }

  flipStay = () => {

    this.setState({
      playerStay: true
    })

  }

  dealCardToPlayer = (cardIndex) => {

    const beginningOfDeck = this.state.deck.slice(0, cardIndex);
    const endOfDeck = this.state.deck.slice(cardIndex + 1);

    this.setState({
      deck: beginningOfDeck.concat(endOfDeck),
      playerTotal: this.state.playerTotal + this.state.deck[cardIndex]
    })
  }


  dealCardToDealer = (cardIndex) => {

    const beginningOfDeck = this.state.deck.slice(0, cardIndex);
    const endOfDeck = this.state.deck.slice(cardIndex + 1);

    this.setState({
      deck: beginningOfDeck.concat(endOfDeck),
      dealerTotal: this.state.dealerTotal + this.state.deck[cardIndex]
    })
  }

  finishPlayerDealing = () => {
    this.setState({
      playerDealing: true
    })
  }

}

export default App;
