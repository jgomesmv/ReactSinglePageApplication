import './board.component.scss';

import React, { PureComponent } from 'react';

import SquareComponent from '../square.component/square.component';

export default class BoardComponent extends PureComponent { 
  renderSquare(i) {
    return <SquareComponent value={i}/>;
  }
  
  render () {
    const status = 'Next player: X';
  
    return (
      <div className="c-board">
        <div className="c-board__status">{status}</div>
        <div className="c-board__row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="c-board__row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="c-board__row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
