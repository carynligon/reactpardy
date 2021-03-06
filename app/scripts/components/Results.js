import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';

const Results = React.createClass({
  newGame: function() {
    document.getElementById('results-page').style.display = 'none';
    hashHistory.push('/');
  },
  render: function() {
    return (
      <div id="results-page">
        <button id="play-again" onClick={this.newGame}>Play Again!</button>
      </div>
    );
  }
});

export default Results;
