import React from 'react';

class Dealer extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        hand: [],
        total: 0
      }
    }
  
    componentDidUpdate(prevProps) {
        if (this.props.finishDealing !== prevProps.finishDealing) {

            this._dealTwo();

            console.log('dealtwo done');
        }
  
    }
  
    render() {


        return (
        <div>
            {/* <button onClick={this._hitMe}>Hit me</button>
            <button onClick={this._stay}>Stay</button> */}
            {/* {this.state.hand[this.state.hand.length - 1]} */}
            <h3>Dealer Hand: </h3>

            <div>
            {
                this.state.hand.map((card, i)=> {
                return (i === 0 && this.props.playerStatus === false)
                ? <p 
                style={
                    {marginRight: '20px', 
                    display: 'inline', 
                    fontSize: '50px'}
                }
                >🂠
                </p> 

                : <p style={{marginRight: '20px', display: 'inline', fontSize: '40px'}}>{card}</p>
                })
            }

            {
                this.props.total > 21 ? <h1>Dealer busts. You win!</h1> : null
            }

            </div>

        </div>
        );
  
    }
  
    _hitMe = () => {

        // pull a single card out of the deck, set it in state
        const randomNum = Math.floor(Math.random() * 51);

        this.props.dealCard(randomNum)
            
    
        this.setState({
            hand: [...this.state.hand, this.props.deck[randomNum]]
        })
  
    }
  
    _dealTwo = () => {

    
        console.log('_dealTwo is running')
        const randomNum = Math.floor(Math.random() * 51);

        this.props.dealCard(randomNum);
  
        this.setState({
        hand: [...this.state.hand, this.props.deck[randomNum]]
        }, () => {
        const randomNum = Math.floor(Math.random() * 51);

        this.props.dealCard(randomNum);

        this.setState({
          hand: [...this.state.hand, this.props.deck[randomNum]]
        }, console.log('done setting state'))
      })
  
    }
  
    // _stay = () => {
    //   this.setState({
    //     stay: true,
    //   })
    // }
  }
  
  export default Dealer;