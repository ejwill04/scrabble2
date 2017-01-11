import React, { Component } from 'react';
import scoreWord from '../helperFunctions/scoreWord';

export default class Org extends Component {
  render() {
    return (
      <div>
        <h1>Scrabble</h1>
        <div>Your score: { scoreWord('word') }</div>
      </div>
    );
  }
}
