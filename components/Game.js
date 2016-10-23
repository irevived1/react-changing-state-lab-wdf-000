const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');



class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {board:[null,null,null,null,null,null,null,null,null],turn:'X'};

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    const newgame = {board:[null,null,null,null,null,null,null,null,null],turn:'X'};
    this.setState(newgame);
  }

  handleClick (i, ev) {
    ev.preventDefault();
    var holder = this.state.board;
    var token = this.state.turn;
    holder[i] = token;
    var hash = {board:holder,turn: ( token == 'X' ? 'O' : 'X' )}
    this.setState(hash);
  }

  getWinner () {
    var wincombo = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    const board = this.state.board;
    for (var i = 0, len = wincombo.length; i < len; i++) {
      if (board[wincombo[i][0]] != null && board[wincombo[i][0]] == board[wincombo[i][1]] && board[wincombo[i][0]] == board[wincombo[i][2]]) {
        return board[wincombo[i][0]];
      }
    }
    return undefined;
  }

  isComplete () {
    for (var i = 0, len = this.state.board.length; i < len; i++) {
      if (this.state.board[i] == null) {
        return false;
      }
    return true;
    }
  }

  render () {
    var s  =  undefined;
    var winner = this.getWinner();
    if (winner || this.isComplete()) {
      s = (<h1>Winner: <Status winner={winner} /></h1>)
    }
    return (
      <div className='game'>
        {s}
        <Board board={this.state.board} onClick={this.handleClick}/>
        <button className='game__reset' onClick={this.handleReset} >Reset</button>
      </div>
    );
  }
}

module.exports = Game;
