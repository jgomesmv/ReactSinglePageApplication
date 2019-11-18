import "./game.page.scss";

import React, { Component } from 'react';

import BoardComponent from "../../components/board.component/board.component";

export default class GamePage extends Component { 
  render () {
    return (
      <div className="p-game">
        <div className="game-board">
          <BoardComponent />
        </div>
        <div className="p-game__gameInfo">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
