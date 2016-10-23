const React = require('react');

class Status extends React.Component {
  render () {
    const { winner } = this.props;
    var holder;
    if (winner == 'X') {
      holder = 'X wins';
    } else if ( winner == 'O' ) {
      holder = 'O wins';
    } else {
      holder = 'Tie'
    }
    return (
      <div className='status' >
        {holder}
      </div>
    );
  }
}

module.exports = Status;
