import './board.component.scss';

import React, { PureComponent } from 'react';

import SquareComponent from '../square.component/square.component';

export default class BoardComponent extends PureComponent { 
  renderSquare(i) {
    return <SquareComponent
      key={`square-${i}`}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}/>;
  }
  
  render () {
    let numberOfRows = 3;
    let numberOfColumns = 3;
    let squareNumber = 0; 
    return (
      <div className="c-board">
        {Array.from(Array(numberOfRows)).map((value, index) =>{
          return (
            <div
              key={`row-${index}`}
              className="c-board__row">
              {Array.from(Array(numberOfColumns)).map(() => {
                const square = this.renderSquare(squareNumber);
                squareNumber++;
                return square;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
