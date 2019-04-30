import React from 'react';
class Player extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        deck: [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11],
        hand: [],
      }
    }
  
    componentDidMount() {
      // on first load, deal player two cards from deck
      this._dealTwo();
  
    }
  
    render() {
  
      return (
        <div>
          <button onClick={this._hitMe}>Hit me</button>
          <button onClick={this._stay}>Stay</button>
          {/* {this.state.hand[this.state.hand.length - 1]} */}
          <h3>Player Hand: </h3>
  
          <div>
            {
              this.state.hand.map((card, i)=> {
                return <p 
                style={
                  {marginRight: '20px', 
                  display: 'inline', 
                  fontSize: '50px'}
                }
                >{card}
                </p> 
              })
            }
  
            {
              this.props.total > 21 ? <h1>Busted!</h1> : <h1>Total: {this.props.total}</h1>
            }
  
          </div>
  
        </div>
      );
  
    }
  
    _hitMe = () => {
      // pull a single card out of the deck, set it in state
      const randomNum = Math.floor(Math.random() * 51);

      // passing to total prop the actual card value
      this.props.calcTotal(this.state.deck[randomNum])


      const beginningOfDeck = this.state.deck.slice(0, randomNum);
      const endOfDeck = this.state.deck.slice(randomNum + 1);
  
      this.setState({
        deck: beginningOfDeck.concat(endOfDeck),
        hand: [...this.state.hand, this.state.deck[randomNum]]
      })
  
    }
  
    _dealTwo = () => {
      const randomNum = Math.floor(Math.random() * 51);

      this.props.calcTotal(this.state.deck[randomNum])

      const beginningOfDeck = this.state.deck.slice(0, randomNum);
      const endOfDeck = this.state.deck.slice(randomNum + 1);
  
      this.setState({
        deck: beginningOfDeck.concat(endOfDeck),
        hand: [...this.state.hand, this.state.deck[randomNum]]
      }, () => {
        const randomNum = Math.floor(Math.random() * 51);

        this.props.calcTotal(this.state.deck[randomNum])

        const beginningOfDeck = this.state.deck.slice(0, randomNum);
        const endOfDeck = this.state.deck.slice(randomNum + 1);
    
        this.setState({
          deck: beginningOfDeck.concat(endOfDeck),
          hand: [...this.state.hand, this.state.deck[randomNum]]
        })
      })
  
    }
  
    _stay = () => {
        this.props.stayStatus();
    }

}
  
  export default Player;