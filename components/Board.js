const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    var arr = new Array(board.length);
    for (var i = 0, len = board.length; i < len; i++) {
      arr[i] = <Field onClick={onClick.bind(board[i],i)} />
    }
    return (
      <div className='board'>
        {arr}
      </div>
    );
  }
}

module.exports = Board;
