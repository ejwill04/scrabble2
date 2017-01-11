import React, { Component } from 'react';
import scoreWord from '../helperFunctions/scoreWord';
import Score from './Score';

export default class Org extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }

  recordScore(e) {
    const score = scoreWord(e.target.value);
    this.setState({ score });
  }

  render() {
    return (
      <div>
        <input
          placeholder='Word'
          onChange={
            this.recordScore.bind(this)
          }
          />
        <Score
          usersScore={this.state.score}
          />
      </div>
    );
  }
}
